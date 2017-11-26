# XMLHttpRequest 对象
XMLHttpRequest 对象用于在后台与服务器交换数据。可以在不刷新页面的情况下跟后台交互数据。

## 交互的步骤：
1. 创建XMLHttpRequest对象
2. 发起连接
3. 发送数据
4. 接收数据

## readyState 通信状态

|状态值|状态|含义|
|---|----|----|
|0  |初始状态   |xhr对象刚创建完|
|1  |连接       |连接到服务器|
|2  |发送请求   |刚刚send完|
|3  |接收完成   |头接收完了|
|4  |接收完成   |体接收完了|

## http status 状态码
1xx     消息
2xx     成功
3xx     重定向
▪ 301 Moved Permanently       永久重定向——下回不会再找他了
▪ 302 Move temporarily        临时重定向——下回依然会请求服务器
▪ 304 Not Modified            缓存
4xx     请求错误
5xx     服务端错误
6xx+    自定义


## 接收响应数据：
1. xhr.responseText    文本数据

2. xhr.responseXML     xml数据
