const koa = require('koa');
const static = require('koa-static');
const router = require('koa-router');

let server = new koa();
server.listen(8080);


//如果reg, login接口都在user下面
let mainRouter = router();
server.use(mainRouter.routes());
mainRouter.use('/user', require('./routers/user.js'));

server.use(static('www'));
