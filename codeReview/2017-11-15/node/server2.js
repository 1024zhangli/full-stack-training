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

    fs.readFile(`www${pathname}`, (err, data) => {
        if (err) {
            res.writeHeader(404);
            res.write('Not Found');
        } else {
            res.write(data);
        }

        res.end();
    });

});

httpServer.listen(8080);

//连接的sock对象
let sockList = [];

//2. websocket 服务武器
let wsServer = io.listen(httpServer);
wsServer.on('connection', sock => {
    sockList.push(sock);
    let currentName = '';
    let currentUserId = '';

    // 注册
    sock.on('reg', (user, pass) => {
        //(1) 数据校验
        if (!regs.userName.test(user)) {
            sock.emit('reg_ret', 1, 'Invalid user name');
        } else if (!regs.password.test(pass)) {
            sock.emit('reg_ret', 2, 'Invalid password');
        } else {

            //(2) 用户是否已存在
            db.query(`SELECT count(ID) as num FROM user_table WHERE username = '${user}'`, (err, data) => {
                if (err) {
                    sock.emit('reg_ret', 3, '数据库读取失败');
                } else if (data[0].num > 0) {
                    sock.emit('reg_ret', 4, '用户名已存在');
                } else {
                    //（3）插入
                    //用户名、密码、离线状态
                    db.query(`INSERT INTO user_table (username, pass, online) values ('${user}', '${pass}', 0)`, err => {
                        if (err) {
                            console.log(err);
                            sock.emit('reg_ret', 5, '插入数据库出错啦')
                        } else {
                            sock.emit('reg_ret', 5, '注册成功！');
                        }
                    });
                }
            })
        }
    });

    // 登录
    sock.on('login', (user, pass) => {
        //1. 数据校验
        if (!regs.userName.test(user)) {
            sock.emit('login_ret', 1, 'Invalid user name');
        } else if (!regs.password.test(pass)) {
            sock.emit('login_ret', 2, 'Invalid password');
        } else {
            //2. 读取数据
            db.query(`SELECT ID, pass FROM user_table WHERE username='${user}'`, (err, data) => {
                if (err) {
                    sock.emit('login_ret', 5, '查询-数据库出错啦！');
                } else if (data.length === 0) {
                    sock.emit('login_ret', 3, '用户名不存在！');
                } else if (data[0].pass !== pass) {
                    sock.emit('login_ret', 3, '用户名或者密码错误！');
                } else {
                    // 3. 密码正确后，设置登陆状态
                    db.query(`UPDATE user_table SET online = 1 WHERE ID = ${data[0].ID}`, err => {

                        if (err) {
                            console.log(err);
                            sock.emit('login_ret', 6, '设置状态-数据库出错啦！');
                        } else {
                            currentName = user;
                            currentUserId = data[0].ID;
                            sock.emit('login_ret', 0, '登陆成功.');
                        }
                    });
                }
            });
        }
    });

    // 接收消息
    sock.on('msg', txt => {
        console.log(txt);
        if (txt === null || txt === "") {
            sock.emit('msg_ret', 1, "消息不能为空");
        } else {

            console.log(sockList.length);
            // 广播给其他人
            sockList.forEach(item => {
                //跳过自己
                if (item === sock) {
                    return;
                }

                item.emit('msg', currentName, txt);
            });

            sock.emit('msg_ret', 0, '发送成功');
        }
    });

    //离线
    sock.on('disconect', function() {
        db.query(`UPDATE user_table SET online = 0 WHERE ID = ${currentUserId}`, err => {
            if (err) {
                consoel.log("数据库出错了，", err);
            }
            currentName = '';
            currentUserId = '';
            sockList = sockList.filter(item => item != sock);
        })
    });
});