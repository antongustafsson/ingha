const api = require('./ingha-api');
const { getCompetitionToken, getPHPSessionId, getBearer, setTop } =  api;
const schedule = require('node-schedule');

(async () => {
    const scheduleDate = new Date();
    scheduleDate.setHours(23, 48, 0, 0);

    schedule(scheduleDate, async () => {
        await setTop("anton@instantsnug.com", "Hybo1234");
        console.log('setTop, time is', new Date());
    });
})();

(async () => {
    const scheduleDate = new Date();
    scheduleDate.setHours(23, 49, 40, 0);

    schedule(scheduleDate, async () => {
        await setTop("anton@instantsnug.com", "Hybo1234");
        console.log('setTop, time is', new Date());
    });
})()