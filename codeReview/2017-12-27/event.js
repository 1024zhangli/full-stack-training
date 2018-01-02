const Event = require('events').EventEmitter;

let ev = new Event();

//
ev.on('self', (a, b, c, d)=>{
  console.log('接收到了1个事件：', a, b, c, d);
});

ev.on('self', (a, b, c, d)=>{
  console.log('接收到了2个事件：', a, b, c, d);
});

ev.emit('self', 1, 2, 3, 4);
