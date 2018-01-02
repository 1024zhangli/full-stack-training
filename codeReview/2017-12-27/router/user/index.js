require('./login');
require('./change');

//在该模块的目录下加入index.js，在index.js中引入所有模块；
//在其他模块中引用的时候，只要引用到该目录就可以加载该目录下的所有文件,而不需要一个个require
