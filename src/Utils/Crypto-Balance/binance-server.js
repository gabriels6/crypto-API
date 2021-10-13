const { Spot } = require('binance-connector-node');
const dayjs = require('dayjs');



async function getBinanceAccount(){
    
    const apiKey = process.env.BINANCE_API_KEY;
    const apiSecret = process.env.BINANCE_API_SECRET;

    const spotClient = new Spot(apiKey,apiSecret);

    let accountData = await spotClient.account({recvWindow: 2000,});

    return accountData.data;
}

async function getEarnings(asset,day){

    const apiKey = process.env.BINANCE_API_KEY;
    const apiSecret = process.env.BINANCE_API_SECRET;

    const spotClient = new Spot(apiKey,apiSecret);

    let options = {

    }

    if (asset != null) {
        options = {
            ...options,
            asset:asset
        }
    }

    if (day != null) {
        options = {
            ...options,
            startTime:dayjs(day).subtract(1, 'day').valueOf(),
            endTime:dayjs(day).valueOf()
        }
    }

    let earningsData = await spotClient.assetDevidendRecord(options);

    return earningsData.data;
}

module.exports = {
    getBinanceAccount,
    getEarnings
}