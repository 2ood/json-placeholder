const router = require('express').Router();

/**
*  @swagger
*  tags:
*    name: Books
*    description: API to manage your books.
*/
/**
*  @swagger
*  paths:
*   /books:
*     get:
*       summary: Lists all the books
*       tags: [Books]
*       responses:
*         "200":
*           description: The list of books.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*     post:
*       summary: Creates a new book
*       tags: [Books]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Book'
*       responses:
*         "200":
*           description: The created book.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*/
const data = require("./sample-data.js");

router.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data.sample_path_1.get));
});

module.exports = router;