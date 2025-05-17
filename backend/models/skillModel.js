const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('skill', skillSchema);