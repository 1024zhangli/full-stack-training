const express = require('express');

let server = express();
server.listen(8080);

let router_user = express.Router();
server.use('/user', router_user);

router_user.get('/', (req, res)=>{
  res.send('用户的根路径');
  res.end();
});

router_user.get('/login', (req, res)=>{
  res.send('登录');
  res.end();
});

router_user.get('/reg', (req, res)=>{
  res.send('注册');
  res.end();
});

let router_vip = express.Router();
router_user.use('/vip', router_vip);
router_vip.get('/', (req, res)=>{
  res.send('vip的根路径');
  res.end();
});

router_vip.get('/login', (req, res)=>{
  res.send('vip的登录');
  res.end();
});

let router_article = express.Router();
server.use('/article', router_article);
router_article.get('/', (req, res)=>{
  res.send('文章的根路径');
  res.end();
});

/**
 express的路由，使用比较简单。生成express.Router()对象router_xxx，server.use('路径'，router_xxx)，
 就可以 把路由挂到对应的路径下面。路由中再写不同的路由的处理方法router_xxx.get/post 。。。
 路由下面继续挂载子路由。

 实际项目，路由单独在目录下面的，目录的路径一般跟路由路径保持一致。这样保持主文件的清晰，解耦.
 参见:server_router2.js
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
