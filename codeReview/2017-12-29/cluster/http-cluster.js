const cluster = require('cluster/cluster');
const os = require('os');
const process = require('process');
const http = require('http');
const url = require('url');
const fs = require('fs');

if (cluster.isMaster) {
    for(let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    console.log(`主进程#pid=${process.pid}`);
} else {
    console.log(`工作进程#pid=${process.pid}, 父进程的#pid=${process.ppid}`);

    http.createServer((req, res)=>{

        console.log(`由工作进程#pid=${process.pid}`);

        let {pathname, query} = url.parse(req.url, true);

        let rs = fs.createReadStream(`www${pathname}`);
        rs.pipe(res);

        rs.on('error', err=>{
            res.writeHeader(404);
            res.write('not found');
            res.end();
        })

    }).listen(8080);
}

//可以起多个进程去处理请求
//主进程和子进程之间能够共享句柄(socket端口)
