const express = require('express');

let router_vip = express.Router();

router_vip.get('/', (req, res)=>{
  res.send('vip的根路径');
  res.end();
});

router_vip.get('/login', (req, res)=>{
  res.send('vip的登录');
  res.end();
});

module.exports = router_vip;
