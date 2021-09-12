const mysql = require('mysql');
const express = require ('express');
const ejs = require ('ejs');
const fs = require ('fs');

let client = mysql.createConnection ({
    host: 'wedydesign.cafe24app.com', //원래는 localhost
    user: 'wedydesign', //카페24아이디 원래는 root
    password: 'dyanf846@', //비밀번호
    database: 'wedydesign' //카페24아이디 원래는 mydbb
}); //mysql 객체 생성

client.connect(); //database run...

let app = express(); //익스프레스 객체 생성

app.set('views', __dirname + '/views');

app.get('/', function (request, response, next) {
    response.send ('index', function (error, results) {
        client.query ('CREATE TABLE portfolio (id int, name varchar(255));');
    });
});

app.get ('/views', function(request, response, next ) { //라우터
    fs.readFile ('./views/webdesign_portfolio.html', 'utf-8', (error, data) => { //ejs페이지 불러오기
        client.query ('SELECT * from portfolio', (error, results, fields) => { //데이터 조회
            let output = ejs.render (data, {
                data: results
            }); //<% %>을 html로 변환
            response.send (output); //웹서버에 전송
        } );
    });
});


app.listen(8001); //server run...