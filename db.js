/* createConnection (user, password); */
const fs = require('fs');
const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let client = mysql.createConnection ({
    user: 'root',
    password: 'qkr8dbs6tj4@',
    database: 'mydb'
});

/* app.js */
let app = express();
app.use(bodyParser.urlencoded ({extended: false}));

app.get('/', (request, response) => {
    fs.readFile('test.html', 'utf-8', (error, data) => {
        /* query (sql[. callback]); */
        client.query ('SELECT * from portfolio', (error, result, fields) => {
            response.send (ejs.render (data, {
                data: result
            }));
        });
    });
});

app.listen(52273, () => {
    console.log ('server run...');
});