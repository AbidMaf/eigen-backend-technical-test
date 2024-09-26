const mongoose = require('mongoose');

const BorrowingSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    member: {
        type: String,
        required: true,
    },
    book: {
        type: String,
        required: true,
    },
    on_loan: {
        type: Boolean,
        required: true,
        default: true
    },
    borrowing_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    return_date: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Borrowings', BorrowingSchema)