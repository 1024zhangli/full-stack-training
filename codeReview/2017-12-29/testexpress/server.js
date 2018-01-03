const express = require('express');

let server = express();

server.listen(8080);

//接口
server.get('/', (req, res)=>{
    res.send('我是GET方法');
});

server.post('/', (req, res)=>{
    res.send('我是POST方法');
});

//静态文件
server.use(express.static('./www/'));
