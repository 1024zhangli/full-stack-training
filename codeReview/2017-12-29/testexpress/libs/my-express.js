const http = require('http');
const url = require('url');
const assert = require('assert');

module.exports = function () {

    let queue = [];

    let server = http.createServer((req, res)=>{

        let {pathname, query} = url.parse(req.url, true);

        req.query = query;
        res.send = function (data) {

            if (!(data instanceof Buffer) && typeof data !== 'string') {
                data = JSON.stringify(data);
            }

            res.write(data);
        }

        __next(0);
        //找路由，并执行路由注册的处理函数
        // express的核心
        function __next(n) {
            for (let i = n; i < queue.length; i++) {
                if (queue[i].path === pathname || queue[i].path === '*') {
                    queue[i].fn(req, res, ()=>{
                        __next(i+1);
                    });
                    break;
                }
            }
        }
        
    });
    
    server.get = function () {
        assert(arguments.length === 2 || arguments.length === 1, 'arguments error');
        let path, fn;

        if (arguments.length === 2){
           path = arguments[0];
           fn = arguments[1];
        } else if (arguments.length === 1) {
            path = '*';
            fn = arguments[0];
        }
        console.log(path, fn);
        queue.push({path, fn});
    };

    server.post = function () {

    };

    server.use = function () {

    };

    return server;
};
