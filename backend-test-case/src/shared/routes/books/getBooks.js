/**
 * @swagger
 * /book:
 *   get:
 *     description: Get list of all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         type: array
 *         description: Returns all of the books.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Book'
 *              example:
 *                 code: 'TW-11'
 *                 title: 'Twilight'
 *                 author: 'Stephenie Meyer'
 *                 stock: 1
 */

const express = require('express');
const getBooks = require('../../../entity/books/usecase/getBook.js')

const router = express.Router();

router.get('/book', getBooks)

module.exports = router;