const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Books', BookSchema)