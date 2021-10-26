const mongoose = require('mongoose');

const CryptoEarningsSchema = new mongoose.Schema({
    createdAt: String,
    asset: String,
    description: String,
    amount: Number
});

module.exports = mongoose.model('CryptoEarnings',CryptoEarningsSchema);