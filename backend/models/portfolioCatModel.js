const mongoose = require('mongoose');

const PortfolioCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('PortfolioCategory', PortfolioCategorySchema);