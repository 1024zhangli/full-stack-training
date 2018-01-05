const express = require('express');
const myBodyParser = require('./libs/my-body-parser');
let server = express();
server.listen(8080);

//server.use(bodyParser.urlencoded({extened: false}));
//extended:false表示用querystring库去解析URL-encoded data, true表示用qs库去解析

//也直接用querystring自己完成bodyParser的解析post enctype=application/x-www-form-urlencoded

server.use(myBodyParser.urlencoded);
server.post('/', (req, res)=>{
   console.log(req.body);
   res.end();
});

