const express = require('express');
const consolidate = require('consolidate');

let server = express();
server.listen(8080);

//1.选择一种模板引擎
server.engine('html', consolidate.ejs);

//2.指定模板文件的扩展名
server.set('view engine', 'ejs');

//3.指定模板文件的路径
server.set('views', './templates');

server.get('/aa', (req, res)=>{
  res.render('1', {
    arr:[1,4,6,99,77, '<strong>998</strong>'],
    catas: ['国际', '国内', '军事', '武器'],
    foot: '<strong>底部</strong>aaa'
  });
});

/**
<%=   输出文字——转义输出(html标签->html实体)
<%-   输出html——非转义输出(html标签->原样)
-%>

include 可以引入其他ejs文件
 */
