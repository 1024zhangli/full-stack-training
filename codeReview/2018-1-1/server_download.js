const express = require('express');
const path = require('path');

let server = express();
server.listen(8080);

server.get('/1.html', (req, res, next)=>{

  let fileName = path.resolve('./static/1.html');

  res.download(fileName, "report.html", (err) => {

    if (err) {
      console.log('下载出错了,', err);
    }

    res.end();
  });
});
