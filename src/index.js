import React ,{Component} from 'react';
import {render} from 'react-dom';
import JobTree from './jobs-tree';

var mkdata = {
	header: '招聘职位',
	jobsGroup: [{
		department: '工程研发部门',
		departmentId: 'd1',
		checked: false,
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
		checked: false,
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


// simple data model
var JobsData = function(data){
	// simple deep-clone
	this.data = JSON.parse(JSON.stringify(data));
	this._groups = this.data.jobsGroup;
}

JobsData.prototype.resetAllCheck = function(checked = false) {
	this._groups.forEach((group) => {
		group.list.forEach((item) => {item.checked = checked});
		group.checked = false;
	})
}

JobsData.prototype.toggleList = function (dId) {
	var group = this._groups.find(x => x.departmentId === dId);
	group.checked = !group.checked;
	group.list.forEach(x => {
		x.checked = group.checked;
	})
}

JobsData.prototype.toggleRowCheck = function(groupId, rowId) {
	var group = this._groups.find(x => x.departmentId === groupId);

	var item = group.list.find(x => x.id === rowId);
	item.checked = !item.checked;

	if (!group.list.find(x => x.checked === false) && group.list.length > 0) {
		group.checked = true;
	} else {
		group.checked = false;
	}
}


var jobsData = new JobsData(mkdata);



render( <JobTree data={jobsData.data} actions={jobsData}/>,
	document.getElementById('container'));




