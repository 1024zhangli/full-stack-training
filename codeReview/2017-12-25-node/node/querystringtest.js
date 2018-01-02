const queryString = require('querystring');

let str = "ei=ndVBWoizF4Wb0gLKh7-oDw&q=free+solo&oq=free+solo&gs_l=psy-ab.3..0l10.8152.8942.0.9823.5.5.0.0.0.0.303.303.3-1.1.0....0...1c.1.64.psy-ab..4.1.302....0.fZZLktAf0dw";
let obj = queryString.parse(str);

console.log(obj);
