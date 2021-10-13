const cryptoAccountService = require('../Services/crypto-account-service');

async function getTotalBalance(request,response){
    return response.json(await cryptoAccountService.getTotalBalance());
}

async function getCryptoBalances(request,response){
    return response.json(await cryptoAccountService.getAccountAssetValues());
}

module.exports = {
    getCryptoBalances,
    getTotalBalance
}