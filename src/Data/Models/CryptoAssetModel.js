const mongoose = require('mongoose');

const CryptoAssetSchema = new mongoose.Schema({
    createdAt: String,
    asset: String,
    quote: Object
});

module.exports = mongoose.model('CryptoAsset',CryptoAssetSchema);