### 常用步骤
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
