const Poloniex = require('poloniex-api-node');
const dayjs = require('dayjs');

async function getPoloniexAccount(){

    const server = new Poloniex(process.env.POLI_API_KEY,process.env.POLI_API_SECRET);

    let balances = await server.returnBalances();
    let validBalances = [];

    Object.keys(balances).forEach((balance) => {
        if(balances[balance] != 0){
            validBalances.push({
                asset:balance,
                free:balances[balance]
            })
        }
    });

    return validBalances;
}


module.exports = {
    getPoloniexAccount
};