const router = require('koa-router');

let user = router();

user.get('/reg/:user/:pass', async (ctx, next)=>{
  console.log(ctx.params);
  ctx.response.body = 'success';
});

user.get('/login/:user/:pass', async (ctx, next)=>{
  ctx.response.body = 'login sucess';
});

module.exports = user.routes();
