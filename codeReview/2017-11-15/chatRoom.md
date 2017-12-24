###接口定义

1. 用户注册
/reg?user=xxx&pass=xxx     {"code": 0, "msg": "信息"}

2. 用户登录
 /login?user=xxx&pass=xxx  {"code": 0, "msg": "信息"}


 websocket 通信
服务端
1. 创建一个httpServer;    
  let httpServer = http.createServer((req, res)=>{});
  httpServer.listen(port);
2. websocket监听httpServer    
  let wsServer = io.listen(httpServer);
  wsServer.on('connection', sock=>{});
