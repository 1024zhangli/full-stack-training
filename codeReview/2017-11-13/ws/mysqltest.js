const mysql = require('mysql');

//1. 连接，创建一个连接池
let db = mysql.createConnection({host: 'localhost', user: 'root', password:'', database: 'test'});
// let db = mysql.createPool({host: 'localhost', user: 'root', password:'', database: 'test'});

db.query('SELECT * FROM t_user_info t WHERE t.age > 13', (err, data)=> {
  if (err) {
    console.log(err);
  } else {
    //data是一个数组
    console.log(data);
  }
})
