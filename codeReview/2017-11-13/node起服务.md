### 起一个http服务
```javascript
let server=http.createServer((req, res)=>{
  req.url/method/host/...
  res.writeHeader/write/end
});
server.listen(8080);

```
1. createServer创建一个server;
  收到请求之后在回调函数中处理，获取url, method, host等等；数据处理完成之后，通过write方法返回。
2. 在这个server上监听一个端口;

### fs的常用方法
```javascript
fs.readFile(path, (err, data)=>{});
fs.writeFile(path, content, err=>{});
```

### websocket
1. 服务端引入socket.io；需要监听httpServer
2. 客户端引入ip:port/socket.io/socket.io.js，连接到服务器端：io.connect('ws://localhost:8080/');
3. 客户端发送消息用sock.emit(消息名，参数1，参数2，参数3....)
4. 服务端接受消息sock.on(消息名， function(参数1，参数2，参数){})
