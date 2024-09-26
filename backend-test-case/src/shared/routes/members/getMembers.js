/**
 * @swagger
 * components:
 *  schemas:
 *    Member:
 *     type: object
 *     required:
 *      - code
 *      - name
 *     properties:
 *       code:
 *        type: string
 *        description: The book code
 *       name:
 *        type: string
 *        description: The member's name
 *       penalty_date:
 *        type: date
 *        description: Last member's penalty started date
 */

/**
 * @swagger
 * tags:
 *  name: Members
*/

/**
 * @swagger
 * /member:
 *   get:
 *     description: Get list of all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         type: array
 *         description: Returns all of the members.
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Member'
 *              example:
 *                 code: 'M001'
 *                 name: 'Angga'
 *                 penalty_date: 2024-09-25T07:32:05.952+00:00
 */

const express = require('express');
const getMembers = require('../../../entity/members/usecase/getMember.js')

const router = express.Router();

router.get('/member', getMembers)

module.exports = router;