const dailyReportService = require('../Services/daily-report-service');
const dayjs = require('dayjs');

async function getDailyReports(request, response) {

    let { query } = request;

    if(query.date === 'all') return response.json(await dailyReportService.getAllDailyReports());

    let dailyReports = await dailyReportService.getDailyReportsByDate(query.date);

    return response.json(dailyReports);
}

module.exports = {
    getDailyReports
};