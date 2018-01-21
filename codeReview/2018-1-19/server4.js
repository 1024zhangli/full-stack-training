const koa = require('koa');
const static = require('koa-static');
const router = require('koa-router');

let server = new koa();
server.listen(8080);

server.use(async (ctx, next)=>{
  console.log('aa');

  await next();
  console.log('bbb');
});

server.use(async (ctx, next) => {
  console.log(1111);
});

/*
可以像写同步的方式去写异步
output:
aa
1111
bbb
*/
