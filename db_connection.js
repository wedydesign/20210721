const fs = require('fs');
const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let client =mysql.createConnection( {
    user : 'root',
    password : "qkr8dbs6tj4@"
} );

let app = express();
app.user(bodyParser.urlencoded( { extended: false} ));

app.get( '/', (request, response) => {
    fs.readFile('webdesign.html', 'utf-8', (error, data) => {
        response.send( ejs.render (data, {
            data: result
        } ) );
    } );
} );