const fs = require('fs');

fs.appendFile('a.txt', 'ssbbcc发放萨嘎是放那边',err=>{
    if (err) {
        console.log('append出错了', err);
    }
});

// appendFile 向文件中追加内容。fs.writeFile是把文件删除了重新写；
