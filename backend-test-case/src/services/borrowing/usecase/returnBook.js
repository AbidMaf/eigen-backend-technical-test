const borrowingSchema = require('../schema/borrowingSchema.js');
const bookSchema = require('../../../entity/books/schema/bookSchema.js');
const memberSchema = require('../../../entity/members/schema/memberSchema.js');
const mongoose = require('mongoose');

const returnBook = async(req, res) => {
    let message = "Book returned successfully"

    try {
        const borrowing = await borrowingSchema.findOneAndUpdate(
            { 
                code: req.body.code,
                on_loan: true 
            },
            { 
                on_loan: false, 
                return_date: new Date() 
            }
        );

        const borrowingDate = new Date(borrowing.borrowing_date);
        const returnDate = new Date();
        const diffTime = Math.abs(returnDate - borrowingDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 7) {
            const member = await memberSchema.findOne({ code: borrowing.member });
            member.penalty_date = returnDate;
            await member.save();
            message = "Book returned successfully, but member has penalty"
        }

        const book = await bookSchema.findOne({ code: borrowing.book });
        book.stock += 1;
        await book.save();
        
        res.status(200).json({ message: message, data: borrowing });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = returnBook;