const cryptoAssetModel = require("../Data/Models/CryptoAssetModel");
const dayjs = require('dayjs');

async function getAllCryptoAssets(){

    let cryptoAssets = await cryptoAssetModel.find();

    return cryptoAssets;
}

async function getCryptoAssetsByDate(queryDate){
    let date = new RegExp(dayjs(queryDate).format("YYYY-MM-DD"),'g');

    let cryptoAssets = await cryptoAssetModel.find({createdAt: date});

    return cryptoAssets;
}

module.exports = {
    getAllCryptoAssets,
    getCryptoAssetsByDate
}