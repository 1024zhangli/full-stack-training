const http = require('http');
const io = require('socket.io');

//1. http服务
const httpServer = http.createServer((req, res) => {

});
httpServer.listen(8080);

//2. websocket服务
const wsServer = io.listen(httpServer);
wsServer.on('connection', sock => {
  sock.on('m1', function (a1, a2, a3) {
    console.log(a1, a2, a3);
  })
});
