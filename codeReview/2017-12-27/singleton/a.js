const mod_b = require('./b');
const mod_c = require('./c');

console.log(mod_b.mod_c === mod_c);

/**
返回的结果是true, 表明node模块是单例，引用的是同一个实例.
**/
