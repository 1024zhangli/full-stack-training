const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib');
const router = require('./libs/router');
const user = require('./router/user');

let httpServer = http.createServer((req, res)=>{

    let {pathname, query} = url.parse(req.url, true);
    req.query = query;

    //res.write()只能发送字符串或者Buffer
    // data => array
    // data => json
    // data => 'string'
    // data => <binaryData>
    res.send = function (data) {
        // 如果不是buffer，也不是string；需要转成字符。
        if (!(data instanceof Buffer) && typeof data !== 'string') {
            data = JSON.stringify(data);
        }
        res.write(data);
    };

    res.setHeader('Content-Type','application/json;charset=utf-8');


    //1. 没有接收者，表示不是一个接口
    if(!router.emit(pathname, req, res)) {
        res.setHeader('Content-Encoding', 'gzip');
        res.setHeader('Content-Type','text/html;charset=utf-8');

        let rs = fs.createReadStream(`www${pathname}`);
        let gz = zlib.createGzip();
        rs.pipe(gz).pipe(res);


        rs.on('error', function () {
            res.writeHeader(404);
            res.write('not found');
            res.end();
        });
    }

});

httpServer.listen(8080);



/**
 * 路由的业务的处理可以单独放在模块中
 */
