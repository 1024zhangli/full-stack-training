### Form表单

ajax,jsonp本质上都是对form的封装。看下form的四个重要的参数
#### 1. action
 提交到哪里，服务器端的接口
#### 2. method
GET/POST/PUT/DELETE/HEAD

>GET——获取东西

>POST、PUT——发送东西      大量发送

>DELETE——删除

>HEAD——让服务器只发送头回来就行(不需要内容)

##### GET   
把数据放在url里面传输, 数据量很小、缓存、地址栏中直接可以看得见，数据量大小<=32K。

##### POST
把数据放在body里，数据量大、不会缓存、地址栏中看不见。数据量官方标准最大2G，实际实现中最大1G。

#### 3. name
参数的名字

#### 4. enctype
#### application/x-www-form-urlencoded
发送的数据格式是这样的： 名字=值&名字=值&... 。form表单默认是这样的格式，发送小数据。
例如提交用户名和密码发送的内容：
```javascript
Name=zhangli&password=12345
```

#### multipart/form-data
数据分块的，用于发送大的数据，例如文件上传，就是用的该类型。
例如提交用户名和密码发送的内容：
```javascript
------WebKitFormBoundary2GnWM99Z2aaGfXbN
Content-Disposition: form-data; name="Name"

zhangli
------WebKitFormBoundary2GnWM99Z2aaGfXbN
Content-Disposition: form-data; name="password"

123456
------WebKitFormBoundary2GnWM99Z2aaGfXbN--
```

#### text/plain:
按照普通文本的格式发送，一般不常用。
例如提交用户名和密码发送的内容：
```javascript
Name=zhangli
password=123456
```
