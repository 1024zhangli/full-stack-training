ReactDOM.render是渲染JSX，将模板转化成HTML，并插入到指定的DOM节点上
样式class在JSX中要写成className
label的for属性，在JSX中要写成htmlFor
单标签也需要闭合, 例如<input/>


React的组件：
1.继承React.Component
2.类名首字母大写
3.必须包含render方法 --- 所有的组件必须是能显示到页面中的(可渲染的)

事件：
1.事件名首字母大写
2.必须给个函数、注意this、注意bind


属性——类似：参数
1.两种传法
  ""、{}, 双引号只能传字符串；{}可以传任何类型
2.接收的时候——this.props.xxx
3.只读的，不能对其改变；而状态是可以改变的

状态：
this.state
1.必须是在构造函数中初始化
2.设置---不能直接操作state；通过setState操作，这样状态改变后会重新渲染（再执行一次render）
