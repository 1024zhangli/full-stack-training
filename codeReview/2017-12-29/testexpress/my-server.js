const express = require('./libs/my-express');

let server = express();

server.listen(8080);

server.get((req, res, next)=>{
    console.log('第0个');
    next();
});

server.get('/', (req, res, next)=>{
    console.log('第一个');

    //next会调用下一个匹配的路由
    next();
});

server.get('/', (req, res, next)=>{
    console.log('第二个');

});
