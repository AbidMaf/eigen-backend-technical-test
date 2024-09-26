/**
 * @swagger
 * components:
 *  schemas:
 *    Borrowing:
 *     type: object
 *     required:
 *      - code
 *      - member
 *      - book
 *      - on_loan
 *      - borrowing_date
 *     properties:
 *       code:
 *        type: string
 *        description: The book code
 *       member:
 *        type: string
 *        description: Code of the member
 *       book:
 *        type: string
 *        description: Borrowed book code
 *       on_load:
 *        type: boolean
 *        description: Status of the borrowing (on loan or not)
 *       borrowing_date:
 *        type: date
 *        description: Date of the borrowing started
 */

/**
 * @swagger
 * tags:
 *  name: Borrow
*/

/**
 * @swagger
 * /borrow:
 *   post:
 *     description: Create a new borrowing
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
 *             member: 
 *               type: string
 *               description: The member's code
 *               example: 'M001'
 *             book: 
 *               type: string
 *               description: The book's code
 *               example: 'TW-11'
 *     responses:
 *       200:
 *         type: array
 *         description: Returns of the new created borrowing.
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
 * 
 */

const express = require('express');
const createBorrowing = require('../../../services/borrowing/usecase/createBorrowing.js')

const router = express.Router();

router.post('/borrow', createBorrowing)

module.exports = router;