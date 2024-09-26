const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    penalty_date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Members', MemberSchema)