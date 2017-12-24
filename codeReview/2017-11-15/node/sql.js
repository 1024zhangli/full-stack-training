const mysql = require('mysql');

let db = mysql.createPool({host:'localhost', user: 'root', password: '', database: 'test'});
let user = 'zhangsan';
db.query(`SELECT count(ID) as num FROM user_table WHERE username = '${user}'`, (err, data)=> {
  if (err) {
      console.log(err);
  } else {
    console.log(data[0].num);
  }

});
