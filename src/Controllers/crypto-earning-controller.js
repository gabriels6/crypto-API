const dayjs = require('dayjs');
const cryptoEarningService = require('../Services/crypto-earning-service');

async function getCryptoEarnings(request, response) {
    let { query } = request;

    if(query.date === 'all') return response.json(await cryptoEarningService.getCryptoEarnings());

    let earnings = await cryptoEarningService.getCryptoEarningsByDate(query.date || dayjs().format('YYYY-MM-DD'));

    return response.json(earnings);
}

module.exports = {
    getCryptoEarnings
}