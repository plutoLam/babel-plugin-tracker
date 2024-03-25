
# 一个用于统计埋点的babel插件

![](https://img.shields.io/badge/author-PlutoLam-f66.svg#crop=0&crop=0&crop=1&crop=1&id=OXVaV&originHeight=20&originWidth=108&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/version-0.0.3-f66.svg#crop=0&crop=0&crop=1&crop=1&id=Nc47V&originHeight=20&originWidth=90&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg#crop=0&crop=0&crop=1&crop=1&id=LyZIm&originHeight=20&originWidth=90&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg#crop=0&crop=0&crop=1&crop=1&id=GoxKU&originHeight=20&originWidth=98&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/test-passing-f90.svg#crop=0&crop=0&crop=1&crop=1&id=b74TK&originHeight=20&originWidth=82&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/build-passing-f90.svg#crop=0&crop=0&crop=1&crop=1&id=iQz3r&originHeight=20&originWidth=88&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/coverage-90%25-09f.svg#crop=0&crop=0&crop=1&crop=1&id=h35xX&originHeight=20&originWidth=96&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
![](https://img.shields.io/badge/license-MIT-09f.svg#crop=0&crop=0&crop=1&crop=1&id=PxjBJ&originHeight=20&originWidth=78&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)



开发过程已发布到掘金：https://juejin.cn/post/7103694235970306055



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
{
	test: /\.js$/,
	exclude: /node_modules/,
	loader: "babel-loader",
	options: {
		presets: [
			"@babel/preset-env"
		],
		plugins: [
			[
				// path.resolve(__dirname, "../src/index.js"),
				"babel-plugin-tracker",
				{
					xlsxPath: path.resolve(__dirname, "../buried.xlsx"),
					func: `
					function(category, action) {
						console.log(category,action);
						window._hmt && window._hmt.push(["_trackEvent", 									category, action]);
					};
					`,
					script: "https://test.js"
				}
			]
		]
	}
}
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



### 功能性

在使用类似“百度统计”这样的统计网站时，需要在引入对应的script文件，此插件已经自动引入，只需要配置`script`参数即可

此插件会将func挂载到`window` 上，随时可以在项目中调用

以往我们埋点时，往往需要手动操作，点位很多时非常浪费时间，现在只需使用注释，在每次编译时该插件会自动将`func`与`id`对应的参数结合起来，在项目中对应的位置执行`func`，且传入注释id对应的参数

