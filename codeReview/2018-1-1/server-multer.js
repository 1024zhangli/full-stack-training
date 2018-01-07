const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

let server = express();
server.listen(8080);

let multerObj = multer({dest: './upload'});
server.use(multerObj.any());

server.post('/upload', (req, res, next)=>{

  //收到的文件，文件信息会放到req.files中
  //上传的文件会变成默认随机数名称的、且不带后缀的文件
  // 如果想变的人也阅读,需要重新命名
  let files = req.files;
  for (let i = 0; i < files.length; i++) {

    let newName = files[i].path + path.extname(files[i].originalname);

    console.log(files[i]);
    console.log(newName);

    fs.rename(files[i].path, newName, err=>{
      if (err) {
        console.log('重名出错了，', err);
        res.sendStatus(500);
        res.end();
      } else {
        if (i === files.length - 1) {
          res.send('upload OK');
          res.end();
        }
      }
    })
  }
});


/**

multer是处理multipart/form-data的中间件

文件上传-multer

//1.引入、配置
const multer=require('multer');
let multerObj=multer({dest: './xxx'});

//2.加给中间件
server.use(multerObj);

//3.用files
req.files


 */
