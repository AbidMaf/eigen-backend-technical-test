/**
 * @swagger
 * /member/books:
 *   get:
 *     description: Get number of books that are being borrowed by the members
 *     tags: [Members]
 *     responses:
 *       200:
 *         type: array
 *         description: Returns the amount of books that are being borrowed by the members.
 *         content:
 *           application/json:
 *              example:
 *                 borrowedBooks: 1
 *                 member: 'Angga'
 */

const express = require('express');
const getMembersBooks = require('../../../entity/members/usecase/getMemberBooks.js')

const router = express.Router();

router.get('/member/books', getMembersBooks)

module.exports = router;