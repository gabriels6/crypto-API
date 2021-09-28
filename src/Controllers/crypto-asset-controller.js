const cryptoAssetService = require('../Services/crypto-asset-service');

async function getCryptoAssets(request,response){
    let { query } = request;

    if(query.date === 'all') return await cryptoAssetService.getAllCryptoAssets();

    return response.json(await cryptoAssetService.getCryptoAssetsByDate(query.date));
}

module.exports = {
    getCryptoAssets
}