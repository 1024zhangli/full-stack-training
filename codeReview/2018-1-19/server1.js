const koa = require('koa');
const static = require('koa-static');
const route = require('koa-route');

let server = new koa();
server.listen(8080);

//1.接口
//注册：/reg?user=xxx&pass=xxx
//url参数
server.use(route.get('/reg', async (ctx, next)=>{
  console.log(ctx.request.query);
  //{ user: 'zl', pass: '123456' }
}));

//路径参数，参数通过async函数的入参传递的
server.use(route.get('/reg/:user/:pass', async (ctx, user, pass, next)=>{



  //原生req、res对象
  ctx.req;
  ctx.res;

  //koa封装的req、res
  ctx.request;
  ctx.respnose;

  ctx.response.body = 'abcef';

  console.log(user, pass);
}));


//2.访问静态文件
server.use(static('www'));
