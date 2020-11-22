const {
    wait,
    getBearer,
    getCompetitionToken,
    getPHPSessionId,
    getUserInfo,
    getLeader,
    update,
    addAtt,
    updateAtt,

    setOrder,
    setTop,
    setTopByName,
    userIsRegistered,
    setOutHandler,
} = require('./ingha-api');

const logOutput = console.log;

// (async () => {
//     const username = 'Alexmartensson1@outlook.com';
//     const password = 'henry0-zahmUx-bywbes';

//     logOutput(username, password);
//     const bearer = await getBearer(username, password);
//     await wait(350);
//     logOutput('bearer', bearer);
//     const token = await getCompetitionToken(bearer);
//     await wait(350);
//     logOutput('token', token);
//     const phpSessionId = await getPHPSessionId(token);
//     await wait(350);
//     const userInfo = await getUserInfo(token, phpSessionId);
//     logOutput({ userInfo });
//     await wait(350);
//     logOutput('PHPSessionId', phpSessionId);
//     const topScore = parseFloat((await getLeader()).leaderboard[0].score);
//     await wait(350);
//     logOutput('Best time is:', topScore);
//     logOutput('update', await update(token, phpSessionId));
//     await wait(350);
//     logOutput('addAtt', await addAtt(token, phpSessionId));
//     await wait(350);
//     logOutput('updateAtt', await updateAtt(token, phpSessionId, 2147483664))
// })();

(async () => {
    await setTopByName('alex', 20.75);
    // await wait(60 * 1);
    // await setTopByName('alex', 20);
    // await wait(60 * 1);
    // await setTopByName('alex', 18.05);
    // await wait(60 * 1);
    // await setTopByName('anton');
    // await wait(25);
    // await setTopByName('anton');
    // await wait(25);
    // await setTopByName('hampus', 18.043);
    // await wait(25);
    // await setTopByName('hampus', 18.017);
    // await wait(25);
    // await setTopByName('hampus', 18);
})();