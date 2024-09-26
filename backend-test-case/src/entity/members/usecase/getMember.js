const memberSchema = require('../schema/memberSchema.js');

const getMembers = async(req, res) => {
    try {
        const members = await memberSchema.find();
        res.status(200).json(members);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getMembers;