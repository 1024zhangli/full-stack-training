const express = require('express');
const path = require('path');

let server = express();
server.listen(8080);

server.get('/1.html', (req, res, next)=>{
  if (req.query['pass'] === '123456') {
    let fileName = path.resolve('./static/1.html');
    res.sendFile(fileName, (err)=> {

      if (err) {
        console.log('发送出错了,', err);
      } else {
        console.log(`文件${fileName}发送成功`);
      }
    });

  } else {
    res.sendStatus(403);
    res.end();
  }
});
