const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

//当设置signed:true的时候，需要设置scret参数
server.use(cookieParser(['fe9ad022']));

server.get('/', (req, res)=> {
  console.log('Cookies: ', req.cookies);
  console.log('signedCookie: ', req.signedCookies);

  res.cookie('pass', '654321', {
    //domain
    //expires: date
    //maxAge: int
    //path
    //secure: true      只用于https
    signed: true
  });

  res.end();
})
