const http = require('http');
const fs = require('fs');
let server = http.createServer(function(req, res) {
    console.log(req.url);

    if (req.url.indexOf('html') !== -1) {
        fs.readFile(`.${req.url}`, (err, data)=> {
           if (err) {
               console.log(err);
               res.writeHeader(404);
               res.write('not found');
           } else {
               res.writeHeader(200);
               console.log(data.toString());
               res.write(data);
           }
            res.end();
        });
    } else {

        if (req.method === 'POST') {
            let body = '';
            req.on('data', function (data) {
                body += data;


            })

            req.on('end', function () {
                console.log(body);

            })
        }
        res.write('ok');
        res.end();
    }


});

server.listen('8080');
