const http = require('http');
const url = require('url');
const fs = require('fs');

httpServer = http.createServer((req, res)=>{

    let {pathname, query} = url.parse(req.url, true);

    fs.readFile(`www${pathname}`, (err, data)=>{
        if (err) {
            res.writeHeader(404);
            res.write('not found');
        } else {
            // 默认就是200
            // res.writeHeader(200);
            res.write(data);
        }

        res.end();
    })
});

httpServer.listen(8080);

/**
 * readFile，先把文件全部读到内存中然后再全部返回给页面。如果文件比较小还能勉强接受，
 * 如果文件比较大，首先全部读到内存中会占用很大内存资源；然后必须是全部读完了才能发送，磁盘在读取的时候，网卡是空闲的；
 * 发送的时候磁盘IO是空闲的，网卡是一直工作的，两个是串行的工作，系统性能的利用率比较低。所以最好是采用流式操作，
 * 边读边发。参见server-stream.js
 *
 **/
