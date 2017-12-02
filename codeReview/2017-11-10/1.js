let http = require('http');
let server = http.createServer((req, res) => {

    console.log(req);
    res.write('OK');
    res.end();
});

server.listen(8080);
console.log('服务器启动成功')
