const { getBinanceAccount, getEarnings } = require('../Utils/Crypto-Balance/binance-server');
const { getPoloniexAccount } = require('../Utils/Crypto-Balance/poliniex-server');
const { getCryptoAssetsByDate } = require('./crypto-asset-service');
const dayjs = require('dayjs');

const date = dayjs().format('YYYY-MM-DD');

async function getAccountAssetValues(){
    let binanceAccount = await getBinanceAccount();
    let poloniexAccount = await getPoloniexAccount();
    let assets = await getCryptoAssetsByDate(date);

    let balances = [];

    binanceAccount.balances.forEach((balance) => {

        let asset = assets.find(({asset}) => {
            return asset == balance.asset;
        });

        if(asset == null) return;

        let Value = asset != null ? balance.free * asset.quote["USD"].price : 0;

        balances.push({
            asset: asset.asset,
            balance: Value
        });
    });

    poloniexAccount.forEach((balance) => {
        let asset = assets.find(({asset}) => {
            return asset == balance.asset;
        });

        if(asset == null) return;

        let Value = asset != null ? balance.free * asset.quote["USD"].price : 0;

        balances.push({
            asset: asset.asset,
            balance: Value
        })
    });

    let filteredBalances = [];

    balances.forEach((balance) => {
        let balanceFound = false;
        filteredBalances.forEach((filteredBalance) => {
            if(balance.asset === filteredBalance.asset){
                filteredBalance.balance += balance.balance;
                balanceFound = true;
            }
        });
        if (!balanceFound) {
            filteredBalances.push(balance);
        }
    });

    return filteredBalances;
}

async function getTotalBalance(){
    let binanceAccount = await getBinanceAccount();
    let poloniexAccount = await getPoloniexAccount();
    let assets = await getCryptoAssetsByDate(date);

    let totalBalance = 0;

    binanceAccount.balances.forEach((balance) => {
        let asset = assets.find(({asset}) => {
            return asset == balance.asset;
        });

        let Value = asset != null ? balance.free * asset.quote["USD"].price : 0;

        totalBalance += Value * 1;
    });

    poloniexAccount.forEach((balance) => {
        let asset = assets.find(({asset}) => {
            return asset == balance.asset;
        });

        let Value = asset != null ? balance.free * asset.quote["USD"].price : 0;

        totalBalance += Value * 1;
    });

    return totalBalance;
}

module.exports = {
    getTotalBalance,
    getAccountAssetValues
}