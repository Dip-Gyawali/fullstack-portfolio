const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    testimonial_name: {
        type: String,
        required: true
    },
    testimonial_designation: {
        type: String,
        required: true
    },
    testimonial_message: {
        type: String,
        required: true,
        maxlength: 10000
    },
    image:{
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('testimonial', testimonialSchema);