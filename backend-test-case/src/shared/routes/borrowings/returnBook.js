/**
 * @swagger
 * /borrow/return:
 *   post:
 *     description: Return a borrowed book
 *     tags: [Borrow]
 *     requestBody:
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             code: 
 *               type: string
 *               description: The borrowing code
 *               example: 'C001'
 *     responses:
 *       200:
 *         type: array
 *         description: Returns of the update of the borrowing.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Borrowing'
 *              example:
 *                 code: 'C001'
 *                 member: 'M001'
 *                 book: 'NRN-7'
 *                 on_loan: true
 *                 borrowing_date: 2024-09-25T07:32:05.952+00:00
 *                 return_date: 2024-09-25T07:32:05.952+00:00
 */

const express = require('express');
const returnBook = require('../../../services/borrowing/usecase/returnBook.js')

const router = express.Router();

router.post('/return', returnBook);

module.exports = router;