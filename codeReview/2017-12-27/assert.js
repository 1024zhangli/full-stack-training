const assert = require('assert');

function div(a, b) {
  assert(typeof a === 'number' && typeof b === 'number', '请输入两个数字');
  assert(b !== 0, '分母不能为0');

  return a/b;
}

console.log(div('a', 'c'));

console.log(div(1, 0));

console.log(div(1, 2))
