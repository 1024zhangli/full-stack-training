const express = require('express');

let server = express();
server.listen(8080);

let router_user = express.Router();
server.use('/user', require('./router/user'));




server.use('/article', require('./router/article'));


/**
 express的路由，使用比较简单。生成express.Router()对象router_xxx，server.use('路径'，router_xxx)，
 就可以 把路由挂到对应的路径下面。路由中再写不同的路由的处理方法router_xxx.get/post 。。。
 路由下面继续挂载子路由。

 实际项目，路由单独在目录下面的，目录的路径一般跟路由路径保持一致。这样保持主文件的清晰，解耦.
 参见:server_router2.jsA
 */



/**

users/
  http://www.aaa.com/users/view
  http://www.aaa.com/users/login
  http://www.aaa.com/users/reg
  http://www.aaa.com/users/ch_pass

  vip/
    http://www.aaa.com/users/vip/login
    http://www.aaa.com/users/vip/xxx
    http://www.aaa.com/users/vip/xxx
    http://www.aaa.com/users/vip/

  company/


article/
  http://www.aaa.com/article/233122223.html
  http://www.aaa.com/article/243422223.html
  http://www.aaa.com/article/234346456.html


 */
