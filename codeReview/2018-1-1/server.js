const express = require('express');
const bodyParser = require('body-parser');

let server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({extened: false}));
//extended:false表示用querystring库去解析URL-encoded data, true表示用qs库去解析

server.post('/', (req, res)=>{
   console.log(req.body);
   res.end();
});

