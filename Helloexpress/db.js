const mysql = require('mysql');
const express = require ('express');
const ejs = require ('ejs');
const fs = require ('fs');

let client = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'qkr8dbs6tj4@',
    database: 'mydb'
});

/* use mydb; */
client.connect();

let app = express();

app.get ('/', function(request, response, next ) {
    fs.readFile ('./views/webdesign_portfolio.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
        client.query ('SELECT * from portfolio', (error, results, fields) => { //데이터 조회
            let output = ejs.render (data, {
                data: results
            }); //<% %>을 html로 변환
            response.send (output); //웹서버에 전송
        } );
    });
});

app.listen(3000);