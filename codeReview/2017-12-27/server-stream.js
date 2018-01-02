const http = require('http');
const url = require('url');
const fs = require('fs');

let httpServer = http.createServer((req, res)=>{

    let {pathname, query} = url.parse(req.url, true);

    let rs = fs.createReadStream(`www${pathname}`);
    rs.pipe(res);

    rs.on('error', function () {
        res.writeHeader(404);
        res.write('not found');
        res.end();
    })

});

httpServer.listen(8080);

/**
 * 采用fs中的createReadStream方法得到一个读文件的流，
 * res支持流式操作的；然后用一个管道连接到res中就OK了
 * 再输到res之前，前面还可以接压缩；加密的操作
 *
 **/
