const express = require('express');
const consolidate = require('consolidate');
const ejs=require('ejs');
const fs = require('fs');

let server = express();
server.listen(8080);

//1.选择一种模板引擎
server.engine('html', consolidate.ejs);

//2.指定模板文件的扩展名
server.set('view engine', 'ejs');

//3.指定模板文件的路径
server.set('views', './templates');

server.get('/aa', (req, res)=>{
  fs.stat('./render_cache/1', (err, stat)=>{
    if (err) {
      renderAndWrite();
    } else {
      let rs = fs.createReadStream('./render_cache/1');
      rs.pipe(res);

      rs.on('error', err=>{
        renderAndWrite();
      })
    }
  });

  function renderAndWrite() {
    ejs.renderFile('./templates/1.ejs', {
      arr:[1,4,6,99,77, '<strong>998</strong>'],
      catas: ['国际', '国内', '军事', '武器'],
      foot: '<strong>底部</strong>aaa'
    }, (err, result)=>{
      fs.writeFile('./render_cache/1', result, err=>{
        res.send(result);
        res.end();
      })
    })
  }
});
