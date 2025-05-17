const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 10000 
    },
    excerpt: {
        type: String,
        required: true
    },
    cover_img:{
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('service', serviceSchema);