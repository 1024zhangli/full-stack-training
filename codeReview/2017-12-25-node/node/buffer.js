let b1 = new Buffer('abc');
let b2 = new Buffer('123');

// Buffer.concat，连接一组buffer
let b3 = Buffer.concat([b1, b2]);

console.log(b3);
