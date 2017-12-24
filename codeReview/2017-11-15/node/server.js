const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');
const io = require('socket.io');
const regs = require('./libs/regs');

let db = mysql.createPool({ hots: 'localhost', user: 'root', password: '', database: 'test' });

//1.http服务器
let httpServer = http.createServer((req, res) => {

    let { pathname, query } = url.parse(req.url, true);

    console.log(pathname, query)
        // /reg?user=xxx&pass=xxx
    if (pathname === '/reg') {

        let { user, pass } = query;

        //(1) 数据校验
        if (!regs.userName.test(user)) {
            res.write(JSON.stringify({ code: 1, msg: 'Invalid user name' }));
            res.end();
        } else if (!regs.password.test(pass)) {
            res.write(JSON.stringify({ code: 2, msg: 'Invalid password' }));
            res.end();
        } else {

            //(2) 用户是否已存在
            db.query(`SELECT count(ID) as num FROM user_table WHERE username = '${user}'`, (err, data) => {
                if (err) {
                    res.write(JSON.stringify({ code: 3, msg: '数据库读取失败' }));
                    res.end();
                } else if (data[0].num > 0) {
                    res.write(JSON.stringify({ code: 4, msg: '用户名已存在' }));
                    res.end();
                } else {
                    //（3）插入
                    //用户名、密码、离线状态
                    db.query(`INSERT INTO user_table (username, pass, online) values ('${user}', '${pass}', 0)`, err => {
                        if (err) {
                            console.log(err);
                            res.write(JSON.stringify({ code: 5, msg: '插入数据库出错啦' }));
                        } else {
                            res.write(JSON.stringify({ code: 0, msg: '注册成功！' }));
                        }
                        res.end();
                    });
                }

            })
        }
    } else if (pathname === '/login') {

        let { user, pass } = query;

        //1. 数据校验
        if (!regs.userName.test(user)) {
            res.write(JSON.stringify({ code: 1, msg: 'Invalid user name' }));
            res.end();
        } else if (!regs.password.test(pass)) {
            res.write(JSON.stringify({ code: 2, msg: 'Invalid password' }));
            res.end();
        } else {
            //2. 读取数据
            db.query(`SELECT ID, pass FROM user_table WHERE username='${user}'`, (err, data) => {
                if (err) {
                    res.write(JSON.stringify({ code: 5, msg: '查询-数据库出错啦！' }));
                    res.end();
                } else if (data.length === 0) {
                    res.write(JSON.stringify({ code: 3, msg: '用户名不存在！' }));
                    res.end();
                } else if (data[0].pass !== pass) {
                    res.write(JSON.stringify({ code: 4, msg: '用户名或者密码错误！' }));
                    res.end();
                } else {
                    // 3. 密码正确后，设置登陆状态
                    db.query(`UPDATE user_table SET online = 1 WHERE ID = ${data[0].ID}`, err => {
                        if (err) {
                            console.log(err);
                            res.write(JSON.stringify({ code: 6, msg: '设置状态-数据库出错啦！' }));
                            res.end();
                        } else {
                            res.write(JSON.stringify({ code: 0, msg: '登陆成功' }));
                            res.end();
                        }
                    });
                }
            })
        }

    } else {
        console.log(`www${pathname}`);
        fs.readFile(`www${pathname}`, (err, data) => {
            if (err) {
                res.writeHeader(404);
                res.write('Not Found');
            } else {
                res.write(data);
            }

            res.end();
        });
    }
});

httpServer.listen(8080);
