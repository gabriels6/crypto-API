const { Router } = require('express');
const { getDailyReports } = require('../Controllers/daily-report-controller');
const { getCryptoAssets } = require('../Controllers/crypto-asset-controller');

const routes = Router();

routes.get('/daily/reports',getDailyReports);

routes.get('/daily/assets',getCryptoAssets);

module.exports = routes;