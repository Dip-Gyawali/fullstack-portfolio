const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Email is invalid.']
    },
    message: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required:true
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread'
    }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
