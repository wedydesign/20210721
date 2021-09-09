/* createConnection (user, password); */
const mysql = require ('mysql');

let client = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'qkr8dbs6tj4@',
    database: 'mydb'
});

/* use mydb */
client.connect();

/* query ('sql', (에러에 관한 매개변수, 접속결과c에 대한 매개변수)); */
client.query ('SELECT * from portfolio', (error, results, fields) => {
    if (!error) {
        console.log(results);
        console.log(fields);
    } else {
        console.log(error);
    }
});