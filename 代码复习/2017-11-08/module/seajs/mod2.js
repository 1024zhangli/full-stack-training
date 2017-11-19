define(function (require, exports, module) {

    //js中需要用require去加载其他模块
    var a = require('a.js');
    var b = require('b.js');

    a.show();
    b.show();
    function show() {
      alert(a.num1 + b.num2);
    }

    module.exports = {
      show
    }
})
