const bookSchema = require('../schema/bookSchema.js');

const getBooks = async(_, res) => {
    try {
        const books = await bookSchema.find({ stock: { $gt: 0 } });
        res.status(200).json(books);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getBooks;