const borrowingSchema = require('../schema/borrowingSchema.js');
const bookSchema = require('../../../entity/books/schema/bookSchema.js');
const memberSchema = require('../../../entity/members/schema/memberSchema.js');
const mongoose = require('mongoose');

const createBorrowing = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const borrowing = new borrowingSchema(req.body);

        const countBorrows = await borrowingSchema.find({ member: borrowing.member, on_loan: true });
        const checkPenalty = await memberSchema.findOne({ code: borrowing.member });

        if(countBorrows.length >= 2) {
            return res.status(400).json({ message: 'Member has reached the maximum borrowing limit' });
        }

        if (checkPenalty?.penalty_date) {
            const penaltyDate = new Date(checkPenalty.penalty_date);
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate - penaltyDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays < 4) return res.status(400).json({ message: `Member has penalty. Can't borrow until ${new Date(new Date().setDate(penaltyDate.getDate() + 3)).toLocaleDateString()}` });
        }
        
        const findBook = await bookSchema.findOne({ code: borrowing.book });
        if (!findBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if(findBook.stock <= 0) {
            return res.status(400).json({ message: 'Not enough book', findBook });
        }

        const newBorrowing = await borrowing.save();
        findBook.stock -= 1;
        await findBook.save();

        await session.commitTransaction();
        session.endSession();

        res.status(201).json(newBorrowing);
    } catch(error) {
        await session.abortTransaction();
        session.endSession();
        res.status(400).json({ message: error.message });
    }
}

module.exports = createBorrowing;