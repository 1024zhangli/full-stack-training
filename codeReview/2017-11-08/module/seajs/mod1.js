define(function(require, exports, module){
  let a = 22;
  let b = 12;
  // 1. 导出的写法用exports每个单独导出. exports也是module的一个属性
  // exports.a = a;
  // exports.b = b;
  // exports.show = function show() {
  //   alert( a + b);
  // }

  // 2. module.exports批量导出
  module.exports = {
    a,b,
    show() {
      alert(a + b);
    }
  }
})
