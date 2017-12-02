### node模块化注意点
1. 没有define定义去定义模块
2. 导出模块成员用exports, module; 导入模块使用require
3. 引用自定义的模块，需要放到node_modules里面。路径前面需要加上./
