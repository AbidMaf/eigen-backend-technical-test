// const memberSchema = require('../schema/memberSchema.js');
const getBorrowings = require('../../../services/borrowing/schema/borrowingSchema.js');

const getBooksBorrowedByMembers = async(req, res) => {
    try {
        const booksBorrowed = await getBorrowings.aggregate([
            {
                $match: { on_loan: true },
            },
            {
                $group: {
                    _id: "$member",
                    booksBorrowed: { $sum: 1 }
                }
            },
            {
                $lookup:  {
                    from: "members",
                    localField: "_id",
                    foreignField: "code",
                    as: "memberDetails"
                }
            },
            {
                $unwind: "$memberDetails"
            },
            {
                $project: {
                    _id: 0,
                    member: "$memberDetails.name",
                    booksBorrowed: 1
                }
            }
        ])
        res.status(200).json(booksBorrowed);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getBooksBorrowedByMembers;