const { Router } = require('express');
const { getDailyReports } = require('../Controllers/daily-report-controller');
const { getCryptoAssets } = require('../Controllers/crypto-asset-controller');
const { login, logout } = require('../Controllers/auth-controller');
const { verifyJWT } = require('../Utils/JWT/Verify');

const routes = Router();

routes.post('/login',login);
routes.post('/logout',logout);

routes.get('/daily/reports',verifyJWT,getDailyReports);

routes.get('/daily/assets',verifyJWT,getCryptoAssets);

module.exports = routes;