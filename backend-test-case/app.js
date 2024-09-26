const express = require('express');
const mongoose = require('mongoose');
const getMembers = require('./src/shared/routes/members/getMembers.js');
const getMembersBooks = require('./src/shared/routes/members/getMemberBooks.js');

const getBooks = require('./src/shared/routes/books/getBooks.js');
const getAvailableBooks = require('./src/shared/routes/books/getAvailableBooks.js');

const createBorrowing = require('./src/shared/routes/borrowings/createBorrowing.js');
const returnBook = require('./src/shared/routes/borrowings/returnBook.js');

const swaggerjsdoc =  require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://other_user:kNla5knxF4wnqeCZ@cluster0.oauiu6t.mongodb.net/borrowing-db?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());
app.use(getMembers);
app.use(getMembersBooks);

app.use(getBooks);
app.use(getAvailableBooks);

app.use(createBorrowing);
app.use(returnBook);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'A simple library API',
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: ['./src/shared/routes/**/*.js']
}
const spacs = swaggerjsdoc(options)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(spacs));

app.get('/test', (_, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});