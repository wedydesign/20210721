/* createConnection (user, password); */
const mysql = require ('mysql');
const express = require ('express');

let client = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'qkr8dbs6tj4@',
    database: 'mydb'
});

/* use mydb */
client.connect();

/* 객체 호출 */
let app = express();

/* 데이터를 미들웨어 함수로 응답하기 */
app.get('/', function(request, response, next ) {
    client.query ('SELECT * from portfolio', (error, results, fields) => {
        response.send (results);
    });
 });

 /* server run */
app.listen (3000);