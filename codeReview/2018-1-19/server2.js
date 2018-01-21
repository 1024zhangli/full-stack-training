const koa = require('koa');
const static = require('koa-static');
const router = require('koa-router');

let server = new koa();
server.listen(8080);

let r1=router();
server.use(r1.routes());
r1.get('/reg/:user/:pass', async (ctx, next)=>{
  console.log(ctx.params);
  ctx.response.body = 'success';
});

r1.get('/login/:user/:pass', async (ctx, next)=>{
  ctx.response.body = 'login sucess';
});

server.use(static('www'));
