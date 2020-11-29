const fetch = require('node-fetch');
const fs = require('fs');
const uuid = require('uuid').v4;
const md5 = require('./md5');
const { URLSearchParams } = require('url');
global.URLSearchParams = URLSearchParams

const getLeader = async () => {
    const periodId = await getCurrentPeriodId();

    return await (await fetch(`https://games.app.ingoapp.com/api/games/2/leaderboard?period_id=${periodId}`)).json();
};
const cookie = 'PHPSESSID=1fdvhu9kbrm0l6j8r5inop5fg2';
const headers = {
    cookie,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1',
    'Origin': 'https://games.app.ingoapp.com',
    'Host': 'games.app.ingoapp.com',
    'Referer': 'https://games.app.ingoapp.com/games/?token=nbzKR7TXmhVh7+tvudSjZ5AGj/GmSjuAzdSlIp4V89Vxn6uBWg0z+7zrs/7GsgztkUK75QB0vDpkwAPXvmsYkmF7K0XhPW1qGZckx7UWQko%3D&region=se&language=sv',
    'X-Requested-With': 'XMLHttpRequest'
};

let outHandlers = [];

const getCurrentPeriodId = async () => {
    const response = await fetch('https://games.app.ingoapp.com/api/games/current?region=se');

    return (await response.json()).periodId;
}

const getPopulatedHeaders = (token, phpSessionId) => {
    return { ...headers, cookie: `PHPSESSID=${phpSessionId}; ingogames=${phpSessionId}`, Referer: `https://games.app.ingoapp.com/games/?token=${escape(token)}&region=se&language=sv` }
};

const update = async (token, phpSessionId) => {
    const resp = await fetch('https://games.app.ingoapp.com/api/users/update', {
        method: 'PATCH',
        headers: getPopulatedHeaders(token, phpSessionId),
    });

    return (await resp.json()).status;
};

const addAtt = async (token, phpSessionId) => {
    const resp = await fetch('https://games.app.ingoapp.com/api/games/2/attempts/add', {
        method: 'POST',
        headers: { ...getPopulatedHeaders(token, phpSessionId), 'content-type': 'application/json', },
        body: JSON.stringify({ "game_id": 2, "period_id": 216 }),
    });

    return (await resp.json()).status;
};

const updateAtt = async (token, phpSessionId, score) => {
    const hist = genHist(score);
    const resp = await fetch('https://games.app.ingoapp.com/api/games/2/attempts/update', {
        method: 'PATCH',
        headers: { ...getPopulatedHeaders(token, phpSessionId), 'content-type': 'application/json', },
        body: JSON.stringify(hist),
    });

    return await resp.json();
};

const getUserInfoByCredentials = async (username, password) => {
    const bearer = await getBearer(username, password);
    const token = await getCompetitionToken(bearer);
    const userInfo = await getUserInfo(token, undefined);

    return userInfo;
};

const getUserInfo = async (token, phpSessionId) => {
    const response = await fetch(`https://games.app.ingoapp.com/api/users?token=${escape(token)}`, {
        method: 'GET',
        headers: getPopulatedHeaders(token, phpSessionId),
    });

    const responseObj = await response.json();

    if (responseObj.http === 200) {
        return {
            nick: responseObj.name,
            attempts: responseObj.validAttempts,
            regDate: responseObj.registrationDate,
        };
    }

    return null;
}

function hashFunc(string) {
    return md5(string).toString();
};

const genHist = (score) => {
    const salt = "ingoChallenge2018";
    const base = JSON.parse(fs.readFileSync('hist-base.json').toString());

    base.score = score;
    base.attempt_data.map((data) => {
        data.time = ((data.time / 21.04100000000003) * score);

        return data;
    });
    base.hash = hashFunc((2) + score.toString() + salt);

    return base;
};

const getBearer = async (username, password) => {
    const params = new URLSearchParams();
    params.append('client_id', 'f890879a-3f2f-11e9-9293-b3f7a52580cb');
    params.append('grant_type', 'password');
    params.append('password', password);
    params.append('scope', 'USER INGO_LOYALTY');
    params.append('username', username);

    const response = await fetch('https://id.circlekeurope.com/api/v2/oauth/authorize/password', {
        method: 'POST',
        body: params,
    });

    const responseObj = await response.json();

    if (responseObj.access_token) {
        return responseObj.access_token;
    }

    return null;
};

const getCompetitionToken = async (bearer) => {
    const response = await fetch('https://backend.ingoapp.com/api/secured/competition/token', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${bearer}`,
        },
    });

    const responseObj = await response.json();

    if (responseObj.token) {
        return responseObj.token;
    }

    return null;
};

const getPHPSessionId = async (token) => {
    const response = await fetch('https://games.app.ingoapp.com/api/games/current?region=se', {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1',
            Referer: `https://games.app.ingoapp.com/games/?token=${escape(token)}&region=se&language=sv`,
            'Origin': 'https://games.app.ingoapp.com',
            'Host': 'games.app.ingoapp.com',
            'X-Requested-With': 'XMLHttpRequest'
        },
    });

    logOutput('setcookies', response.headers.raw()['set-cookie'])

    const setCookieValue = response.headers.raw()['set-cookie'][0];

    logOutput({ setCookieValue });

    return setCookieValue.split(';')[0].split('=')[1];
};

const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

const setTop = async (username, password, score = null) => {
    logOutput(username, password);
    const bearer = await getBearer(username, password);
    await wait(350);
    logOutput('bearer', bearer);
    const token = await getCompetitionToken(bearer);
    await wait(350);
    logOutput('token', token);
    const phpSessionId = await getPHPSessionId(token);
    await wait(350);
    const userInfo = await getUserInfo(token, phpSessionId);
    logOutput({ userInfo });
    await wait(350);
    logOutput('PHPSessionId', phpSessionId);
    const topScore = parseFloat((await getLeader()).leaderboard[0].score);
    await wait(350);
    logOutput('Best time is:', topScore);
    logOutput('update', await update(token, phpSessionId));
    await wait(350);
    logOutput('addAtt', await addAtt(token, phpSessionId));
    await wait(350);
    logOutput('updateAtt', await updateAtt(token, phpSessionId, score === null ? (topScore - 0.001) : score))
};

const getUsers = () => {
    const users = JSON.parse(fs.readFileSync('users.json').toString());

    return Object.keys(users);
};

const getUserCredentials = (name) => {
    const users = JSON.parse(fs.readFileSync('users.json').toString());

    return users[name];
};

const getLoggedInUrlByCredentials = async (username, password) => {
    const bearer = await getBearer(username, password);
    const token = await getCompetitionToken(bearer);
    const escapedToken = escape(token);

    return `https://games.app.ingoapp.com/games/?token=${escapedToken}&region=se&language=sv`;
};

const getLoggedInUrlByName = async (name) => {
    const { username, password } = getUserCredentials(name);
    const url = await getLoggedInUrlByCredentials(username, password);

    return url;
};

const setTopByName = async (name, score = null) => {
    const users = JSON.parse(fs.readFileSync('users.json').toString());
    const { username, password } = users[name];

    await setTop(username, password, score);
}

const setOrder = async (order, progressCallback = () => {}) => {
    const reversed = order.reverse();

    for (let i = 0; i < reversed.length; i++) {
        progressCallback(i / reversed.length);

        await setTopByName(reversed[i]);
        await wait(350);    
    }

    progressCallback(1);
};

// (async () => {
//     const order = ['robin', 'anton', 'hampus', 'alex', 'victor'];

//     await setOrder(order, (progress) => {
//         logOutput(`${Math.round(progress * 100)}%`);
//     })
// })()

const userIsRegistered = (userRef) => {
    const users = JSON.parse(fs.readFileSync('users.json').toString());
    
    return Boolean(users[userRef]);
};

const setOutHandler = (handler) => {
    outHandlers = [handler];
};

const logOutput = (...out) => {
    console.log(...out);
    outHandlers.forEach(handler => handler(out));
};

module.exports = {
    setOrder,
    setTop,
    setTopByName,
    userIsRegistered,
    setOutHandler,

    getBearer,
    wait,
    getCompetitionToken,
    getPHPSessionId,
    getUserInfo,
    getLeader,
    update,
    addAtt,
    updateAtt,

    getUsers,
    getLoggedInUrlByCredentials,
    getUserCredentials,
    getUserInfoByCredentials,
    getLoggedInUrlByName,
};