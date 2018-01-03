const cluster = require('2017-12-28/cluster/cluster');

// 子进程没有fork方法，只有主进程有。可以通过cluster.isMaster来判断是不是主进程
if (cluster.isMaster) {

    console.log('进程已启动');
}

console.log('进程已启动');
