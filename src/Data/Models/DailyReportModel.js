const mongoose = require('mongoose');

const DailyReportSchema = new mongoose.Schema({
    Balance: Number,
    Variation: Number,
    createdAt: String
});

module.exports = mongoose.model('DailyReport',DailyReportSchema);