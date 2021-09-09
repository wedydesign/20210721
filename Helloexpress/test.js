/* createConnection (user, password); */
const mysql = require ('mysql');

let client = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'qkr8dbs6tj4@',
    database: 'mydb'
});

client.connect(); //db실행

/* query ('sql', (에러에 관한 매개변수, 접속결과에 대한 매개변수)); */
client.query ('SELECT * from portfolio', (error, result) => {
    
});

client.end(); //db종료