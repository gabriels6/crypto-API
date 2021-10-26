const dayjs = require('dayjs');
const cryptoEarningModel = require('../Data/Models/CryptoEarningsModel');

async function getCryptoEarnings() {
    let cryptoAssets = await cryptoEarningModel.find();

    return cryptoAssets;
}

async function getCryptoEarningsByDate(queryDate) {
    let date = new RegExp(dayjs(queryDate).format("YYYY-MM-DD"),'g');

    let cryptoAssets = await cryptoEarningModel.find({createdAt: date});

    return cryptoAssets;
}

module.exports = {
    getCryptoEarnings,
    getCryptoEarningsByDate
}