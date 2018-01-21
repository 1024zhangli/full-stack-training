koa没有static，需要引入koa-koa没有static
koa强依赖router----没有get/post，use也不能指定地址。
 (1) koa-route
      适用于小东西，路由的参数，直接给中间件函数加参数-----ctx, ...., next
      server.use(route.get(xxxx));

 (2)koa-router
    适用项目,路由的参数从ctx.params中获取
    let r1 = router();
    server.use(r1.routes());
    r1.get(xxxx)
