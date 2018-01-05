const fs = require('fs');
const requestIp = require('request-ip');

module.exports = function (req, res, next) {

    console.log(requestIp.getClientIp(req));

    let data = [];
    let date = new Date();
    data.push(`[${date.toGMTString()}]`);

    data.push(req.method);

    data.push(req.url);

    fs.appendFile('logs/access_log.txt', data.join(' ') + '\n', (err)=>{

        if (err) {
            console.log('日志写入失败', err);
        }

        next();
    })
};
