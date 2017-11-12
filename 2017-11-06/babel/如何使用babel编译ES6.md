参考babeljs的官网[http://babeljs.io/docs/setup#installation](http://babeljs.io/docs/setup#installation)

1. npm init 创建npm的项目，生成package.json配置文件

2. 安装babel cli

```shell
npm i -g babel-cli
```

3. 在script部分添加编译的命令
"build": "babel js -d build" ，表示把js下面的文件编译到build目录下面

4. 创建一个.babelrc文件，并添加
```javascript
{
  "presets": ["env"]
}
```

5. 安装babel-preset-env
```shell
npm i babel-preset-env --save-dev
```
