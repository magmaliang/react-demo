module.exports = {
	header: '招聘职位',
	jobsGroup: [{
		department: '工程研发部门',
		departmentId: 'd1',
		list: [{
			id: 'a1',
			name: 'Mac 开发工程师',
			count: "9",
			checked: false
		},{
			id: 'a2',
			name: 'iOS App 测试工程师',
			count: "9",
			checked: false
		},{
			id: 'a3',
			name: 'Web 前端工程师',
			count: "111",
			checked: false
		}]
	},{
		department: '产品设计部门',
		departmentId: 'd2',
		list: [{
			id: 'a1',
			name: '网页设计师',
			count: "9",
			checked: false
		},{
			id: 'a2',
			name: 'ID/工业设计师',
			count: "9",
			checked: false
		}]
	}]
}

var JobsData = function(data){
	this._data = data;
	this._groups = data.jobsGroup || [];
}

JobsData.prototype.resetAllCheck = function(checked = false) {
	this._groups.forEach((group) => {
		group.forEach((item) => {item.checked = checked});
	})
}

JobsData.prototype.toggleJobRowCheck = function(groupId, rowId) {
	var group = this._groups.find(x => x.departmentId === groupId);

	var item = group.list.find(x => x.id === rowId)[0]
	item.checked = !item.checked;
}