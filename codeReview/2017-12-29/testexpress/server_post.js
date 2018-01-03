const express = require('express');
const bodyParser = require('body-parser');

let server = express();

server.listen(8080);

server.use(bodyParser.urlencoded({extended: false}));

server.post('/aaa', (req, res)=>{
   console.log(req.body);
   res.send('OK');
   res.end();
});

//express 自身是不带post消息体的解析的。需要引入中间件
