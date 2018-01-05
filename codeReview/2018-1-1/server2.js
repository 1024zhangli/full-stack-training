const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
let server = express();
server.listen(8080);

//server.use(bodyParser.urlencoded({extened: false}));
//extended:false表示用querystring库去解析URL-encoded data, true表示用qs库去解析

//也直接用querystring自己完成bodyParser的解析post enctype=application/x-www-form-urlencoded
server.use((req, res, next)=>{

   let str = '';
   req.on('data', data=>{
      str += data;
   });

   req.on('end', ()=>{
      req.body = querystring.parse(str);
      next();
   })
});

server.post('/', (req, res)=>{
   console.log(req.body);
   res.end();
});

//将use中的抽成模块，==> server3.js
