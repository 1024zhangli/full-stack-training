const koa = require('koa');
const static = require('koa-static');
const router = require('koa-router');

let server = new koa();
server.listen(8080);

server.use(async (ctx, next)=>{
  let start = new Date().getTime();

  await next();

  console.log(`接口处理时间：${new Date().getTime() - start}ms`);
});

server.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(`e是：${e.name}`);
  }
});

server.use(async (ctx, next) => {
  await new Promise((resolve, reject)=>{
    setTimeout(()=> {
      console.log('finish');

      resolve();
    }, 1000);
  });

  await next();
});

server.use(async ()=>{
  console.log(oDiv);
});

/*
koa这种async next这种异步调用的同步写法，可以用来统计接口执行的时间，以及在最外层进行整个流程的异常处理
*/
