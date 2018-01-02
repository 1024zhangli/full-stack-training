const crypto = require('crypto');

let hash = crypto.createHash('md5');

// hash.update('abcdef');
hash.update('abc');
hash.update('def');
// 和直接写update('abcdef')效果一样
console.log(hash.digest('hex'));

//结果：e80b5017098950fc58aad83c8c14978e
