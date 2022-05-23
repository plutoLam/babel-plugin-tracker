
# 一个用于统计埋点的babel插件

### 安装
```javascript
npm i babel-plugin-tracker
```
```javascript
yarn add babel-plugin-tracker
```

### 使用
#### 配置
```javascript
const path = require("path");

module.exports = {
	...
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					...
					plugins: [
						[
							"babel-plugin-tracker",
							{
								xlsxPath: path.resolve(__dirname, "../buried.xlsx"),
								func: `
								function(category, action) {
									console.log(category,action);
									window._hmt && window._hmt.push(["_trackEvent", category, action]);
								};
								`,
								script: "https://test.js"
							}
						]

					]
				}

			}
		]
	}
};
```
参数说明

|   参数   |            值            |
| :------: | :----------------------: |
| xlsxPath |     Excel的绝对路径      |
|   func   | 一个字符串形式的匿名函数 |
|  script  |  需要加入的script的src   |



### 如何注释

注释应遵守如下规范

```
// buried-[id]
```

以`buried`开头的注释就可以被此插件捕获到，id与Excel表上id字段对应



#### Excel表

Excel表应遵守如下格式

![img](https://cdn.nlark.com/yuque/0/2022/png/28603062/1653303290451-5aeb224b-ba21-403c-9fb9-e07ded820ca3.png)

| 事件 |    id    |    属性    |                            属性值                            |
| :--: | :------: | :--------: | :----------------------------------------------------------: |
| xxx  | 唯一标识 | 对应的操作 | 这里暂时可放两个参数，参数中前面为#即为变量，若不带#即为字符串 |



### 有什么用

在使用类似“百度统计”这样的统计网站时，需要在引入对应的script文件，此插件已经自动引入，只需要配置`script`参数即可

此插件会将func挂载到`window` 上，随时可以在项目中调用

以往我们埋点时，往往需要手动操作，点位很多时非常浪费时间，现在只需使用注释，在每次编译时该插件会自动将`func`与`id`对应的参数结合起来，在项目中对应的位置执行`func`，且传入注释id对应的参数

