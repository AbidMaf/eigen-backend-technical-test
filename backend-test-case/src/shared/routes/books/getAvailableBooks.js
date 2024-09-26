/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *     type: object
 *     required:
 *      - code
 *      - title
 *      - author
 *      - stock
 *     properties:
 *       code:
 *        type: string
 *        description: The book code
 *       title:
 *        type: string
 *        description: The book title
 *       author:
 *        type: string
 *        description: The book author
 *       stock:
 *        type: number
 *        description: The book stock
 */

/**
 * @swagger
 * tags:
 *  name: Books
*/

/**
 * @swagger
 * /book/available:
 *   get:
 *     description: Get list of all available books
 *     tags: [Books]
 *     responses:
 *       200:
 *         type: array
 *         description: Returns all of the available books.
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
const getAvailableBooks = require('../../../entity/books/usecase/getAvailableBook.js')

const router = express.Router();

router.get('/book/available', getAvailableBooks)

module.exports = router;