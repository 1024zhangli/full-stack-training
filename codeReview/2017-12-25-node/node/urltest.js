const url = require('url');

let obj = url.parse("https://www.google.com/search?ei=ndVBWoizF4Wb0gLKh7-oDw&q=free+solo&oq=free+solo&gs_l=psy-ab.3..0l10.8152.8942.0.9823.5.5.0.0.0.0.303.303.3-1.1.0....0...1c.1.64.psy-ab..4.1.302....0.fZZLktAf0dw", true);

console.log(obj);

//url解析url的各种字段，常用来解析query参数，pathname;第二个参数为true，表示解析出来的query字段是一个json对象。

