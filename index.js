const fetch = require('node-fetch');
const md5 = require('./md5');
const express = require('express');

const getleader = async () => await (await fetch('https://games.app.ingoapp.com/api/games/2/leaderboard?period_id=216')).json();
const cookie = 'PHPSESSID=vdvu9rr50jdhshgge8boj05g25';
const headers = {
    cookie,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/15E148 Safari/604.1',
    'Origin': 'https://games.app.ingoapp.com',
    'Host': 'games.app.ingoapp.com',
    'Referer': 'https://games.app.ingoapp.com/games/?token=nbzKR7TXmhVh7+tvudSjZ5AGj/GmSjuAzdSlIp4V89Vxn6uBWg0z+7zrs/7GsgztkUK75QB0vDpkwAPXvmsYkmaxXUnnEC3wB+5nnpYv2vU%3D&region=se&language=sv',
    'X-Requested-With': 'XMLHttpRequest'
};
const update = async () => {
    const resp = await fetch('https://games.app.ingoapp.com/api/users/update', {
        method: 'PATCH',
        headers
    });

    return (await resp.json()).status;
};

const addAtt = async () => {
    const resp = await fetch('https://games.app.ingoapp.com/api/games/2/attempts/add', {
        method: 'POST',
        headers: { ...headers, 'content-type': 'application/json', },
        body: JSON.stringify({ "game_id": 2, "period_id": 216 }),
    });

    return (await resp.json()).status;
};

const updateAtt = async (score) => {
    const hist = genHist(score);
    console.log('hist', hist);
    const resp = await fetch('https://games.app.ingoapp.com/api/games/2/attempts/update', {
        method: 'PATCH',
        headers: { ...headers, 'content-type': 'application/json', },
        body: JSON.stringify(hist),
    });

    return await resp.json();
}

function hashFunc(string) {
    return md5(string).toString();
}

const genHist = (score) => {
    const salt = "ingoChallenge2018";
    const base = {
        "game_id": 2,
        "score": "21.04100000000003",
        "hash": "",
        "attempt_data": [
            {
                "eventId": 9,
                "time": 1.209,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 2.612,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 5.214999999999997,
                "game_id": 2
            },
            {
                "eventId": 9,
                "time": 7.120000000000003,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 7.922999999999995,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 10.52599999999999,
                "game_id": 2
            },
            {
                "eventId": 4,
                "time": 10.725999999999988,
                "game_id": 2
            },
            {
                "eventId": 4,
                "time": 11.526999999999985,
                "game_id": 2
            },
            {
                "eventId": 9,
                "time": 12.729999999999976,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 13.129999999999981,
                "game_id": 2
            },
            {
                "eventId": 4,
                "time": 15.331999999999974,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 15.832999999999974,
                "game_id": 2
            },
            {
                "eventId": 4,
                "time": 15.832999999999974,
                "game_id": 2
            },
            {
                "eventId": 9,
                "time": 18.236,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 18.437,
                "game_id": 2
            },
            {
                "eventId": 2,
                "time": 21.04100000000003,
                "game_id": 2
            },
            {
                "eventId": 3,
                "time": 21.04100000000003,
                "game_id": 2
            },
        ]
    };

    base.score = score;
    base.attempt_data.map((data) => {
        data.time = ((data.time / 21.04100000000003) * score);

        return data;
    });

    base.hash = hashFunc((2) + score.toString() + salt);

    return base;
}

const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

app = express();

app.use((req, res, next) => {
    (async () => {
        const topScore = parseFloat((await getleader()).leaderboard[0].score);
        await wait(350);
        console.log(topScore);
        console.log('update', await update());
        await wait(350);
        console.log('addAtt', await addAtt());
        await wait(2000);
        console.log('updateAtt', await updateAtt(topScore * 0.99))
        // setTimeout(async () => {
        //     console.log('updateAtt', await updateAtt(topScore * 0.99))
        // }, topScore * 1000);
    })()

    next('done');

})

app.listen(8080);