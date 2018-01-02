const fs =require('fs');
const zlib = require('zlib');

let rs = fs.createReadStream('www/1.jpg');
let ws = fs.createWriteStream('www/2.jpg.gz');

let gz = zlib.createGzip();

rs.pipe(gz).pipe(ws);

rs.on('error', err=>{
  console.log('读取失败');
});

ws.on('error', err=>{
  console.log('写入失败');
});

ws.on('finish', ()=>{
  console.log('写入完成');
});
