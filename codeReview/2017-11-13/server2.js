console.log('起最基本的http监听服务')
const http = require('http');
const fs = require('fs');
let server = http.createServer((request, response) => {

  console.log(`客户端请求的是：${request.url}`);


  //根据请求返回一些东西
  fs.readFile(`data${request.url}`, (err, data) => {
    if (err) {

      //如果没有这个页面返回404页面
      fs.readFile('./data/404.html', (err, data) => {
        if (err) {
          response.writeHeader(404);
        } else {
          response.write(data);
        }
        response.end();
      })
    } else {
      response.write(data);
      response.end();
    }
  });

});

server.listen(8080);
console.log('server start on 8080');
