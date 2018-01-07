const express = require('express');
const consolidate = require('consolidate');

let server = express();
server.listen(8080);

//1.选择一种模板引擎
server.engine('html', consolidate.pug);
//2.指定模板文件的扩展名
server.set('view engine', 'pug');
//3.指定模板文件的路径
server.set('views', './templates_pug');

server.get('/aa', (req, res)=>{
  res.render('1', {
    pretty: true,   //渲染出来的html没有压缩
    a: 12,
    b: 5,
    arr:[1,4,6,99,77, '<strong>998</strong>'],
    catas: ['国际', '国内', '军事', '武器'],
    foot: '<strong>底部</strong>aaa'
  });
});

/**

pug
1.缩进, 全文要保持统一的缩进空格数
2.单行内容：标签后面 空个格，然后随便写
3.简写
  id: div#div1
  类名：div.box.box2.box3...
4.属性——标签(xxx=xxx,xxx=xxx,...)
5.输出大量内容
  标签.
    内容 内容 内容 内容 内容 内容
    内容 内容 内容 内容 内容 内容
    内容 内容 内容 内容 内容 内容
    内容 内容 内容 内容 内容 内容
6.任意JS代码
  - js代码
7.pug循环
  for xx in arr
    xx


*/
