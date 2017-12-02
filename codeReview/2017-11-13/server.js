console.log('起最基本的http监听服务')
const http = require('http');
let server = http.createServer((request, response) => {

  console.log(request);
  console.log(`客户端请求的是：${request.url}`);
  console.log(`请求的方法是：${request.method}`);

  //根据请求返回一些东西
  if (request.url == '/aaa') {
    response.write('bbb \n');
  } else if (request.url == 'index.html'){
    response.write('html \n');
  } else {
    response.write('hello node \n');
  }

  response.write('server running....');
  response.end();

});

server.listen(8080);
console.log('server start on 8080');
