const cluster = require('cluster/cluster');
const os = require('os');
const process = require('process');

if (cluster.isMaster) {
    for(let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    console.log(`主进程#pid=${process.pid}`);
} else {
    console.log(`工作进程#pid=${process.pid}, 父进程的#pid=${process.ppid}`);
}

/**
 * CPU有几个核，开几个工作进程，这样CPU的利用率比较高
 **/
