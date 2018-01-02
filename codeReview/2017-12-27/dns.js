const dns = require('dns');


dns.lookup('www.baidu.com/', (err, data)=>{
  if(err){
    console.log('错了', err);
  }else{
    console.log(data);
    // 180.97.33.107
  }
});

let ip = '180.97.33.107';
dns.lookupService(ip, 80, (err, data)=>{
  if (err) {
    console.log('错了', err);
  } else {
    console.log(data);
  }
});
