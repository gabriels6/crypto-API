const dailyReportModel = require('../Data/Models/DailyReportModel');
const dayjs = require('dayjs');

async function getAllDailyReports(){
    return await dailyReportModel.find();
}

async function getDailyReportsByDate(queryDate){
    let date = new RegExp(dayjs(queryDate).format("YYYY-MM-DD"),'g');

    let dailyReports = await dailyReportModel.find({createdAt: date});

    return dailyReports;
}

module.exports = {
    getAllDailyReports,
    getDailyReportsByDate
}