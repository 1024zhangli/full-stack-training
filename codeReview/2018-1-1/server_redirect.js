const express = require('express');

let server = express();
server.listen(8080);

server.get('/baidu', (req, res, next)=>{
  res.redirect('http://www.baidu.com');
});

//express中的重定向
