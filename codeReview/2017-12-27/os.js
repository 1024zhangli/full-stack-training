const os = require('os');

// cpu信息
console.log(os.cpus());
// 空闲内存
console.log(os.freemem()/1024/1024/1024);
// 1, 5, and 15 分钟的平均负载
console.log(os.loadavg());
