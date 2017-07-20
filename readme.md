## 2017-20

### define data and component

- data

```javascript
{
	header: ''
	,jobsGroup: [
		{
			departmentName: ''
			,departmentId: ''
			,jobs: [
				{
					id: 'string'
					,name: 'string'
					,count: number
				}
			]
		}
	]
}
```

// data model
JobsData.prototype = {
	
}

- cmps

**JobsTree - container**

**JobRow**
**JobsList**
**JobGroup**

### 如何验收成果

- 完成文档描述功能。
- 组件拆分合理，对外暴露的大组件 JobTree 与外部环境除了数据结构和回调函数无耦合，暴露api合理
- 注释合理（此条未完成，没来得及注释）
- 还原设计稿（未完成还原）

### 其他

- 总花费时间： 4个半小时
- 未实现功能
	- expand-collaps 折叠按钮交互（这个实现也是个简单的div ratote）
	- 性能优化 未使用pureCmp
	- checkbox的样式问题，来不及做icon
	- 严格的像素级实现
	- 数据校验
- 自测有bug的地方： 无

## coding 过程记录

### 2017-20-20:32

complete basic logic function ,without-css

**todo:**

- css
- event bus

### 2017-20-23:49

base style

**todo**

- arrow icon
- checkbox style
- event bus

### 2017-21-01：12

simple data model

readme

