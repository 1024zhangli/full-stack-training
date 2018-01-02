const http = require('http');
const url = require('url');
const fs = require('fs');
const zlib = require('zlib');

let httpServer = http.createServer((req, res)=>{

    let {pathname, query} = url.parse(req.url, true);

    res.setHeader('Content-Encoding', 'gzip');

    let rs = fs.createReadStream(`www${pathname}`);
    let gz = zlib.createGzip();
    rs.pipe(gz).pipe(res);


    rs.on('error', function () {
        res.writeHeader(404);
        res.write('not found');
        res.end();
    })

});

httpServer.listen(8080);

/**
 * 服务器压缩之后传到前台，浏览器要能识别出来是压缩后的资源，需要在响应头设置Content-Encoding=gizp
 *
 **/
