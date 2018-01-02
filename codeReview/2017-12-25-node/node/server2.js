const http = require('http')
const url = require('url');

let httpServer = http.createServer((req, res)=>{

  //GET 数据
  let {pathname, query} = url.parse(req.url, true);

  //POST数据
  let aBuffer = [];
  req.on('data', data=>{
    aBuffer.push(data);
  });

  req.on('end', ()=>{
    let data = Buffer.concat(aBuffer);

    if (req.headers['content-type'].startsWith('multipart/form-data')) {
      let post = {};
      let files = {};


      const boundary = '--' + req.headers['content-type'].split(';')[1].split('=')[1];
    }
  })
});

httpServer.listen(8080);
