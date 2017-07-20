import React ,{Component} from 'react'
import {render} from 'react-dom';

class JobRow extends Component {
	constructor(props){
		super(props);
	}

	toggleCheck = ()=>{
		this.props.toggleRowCheck(this.props.dId, this.props.id);
	}

	render(){
		return <li>
			<input type="checkbox" checked={this.props.checked} onClick={this.toggleCheck}/>
			<span>{this.props.name}</span>
			<span>{this.props.count}</span>
		</li>
	}
}

class JobList  extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var content = this.props.list.map((x, index) => {
			return <JobRow {...x} key={index} toggleRowCheck={this.props.toggleRowCheck} dId={this.props.dId}/>
		})

		return <ul className="jobs-list">{content}</ul>
	}
}

class JobGroup extends Component {
	constructor(props){
		super(props);
		this.state = {
			checked: false
		}
	}

	toggleList = () => {
		this.setState({checked: !this.state.checked});
		this.props.toggleList(this.props.departmentId);
	}

	render(){
		return <div className="jobs-group">
			<div className="group-header">
				<input type="checkbox" checked={this.state.checked} onClick={this.toggleList}/>
				<span>{this.props.department}</span>
				<span>{this.props.count}</span>
			</div>
			<JobList list={this.props.list} toggleRowCheck={this.props.toggleRowCheck} dId={this.props.departmentId}/>
		</div>
	}
}


// container
export default class JobsTree extends Component {
	constructor(props){
		super(props);
	}

	clearAllCheck = () => {
		this.props.jobsGroup.forEach((group) => {
			group.list.forEach((item) => {item.checked = false});
		})
		this.setState({});
	}

	toggleList = (dId) => {
		this.props.jobsGroup.find(x => x.departmentId === dId).list.forEach(x => {
			x.checked = !x.checked;
		})
		this.setState({});
	}

	toggleRowCheck = (dId, rowId) => {
		var row = this.props.jobsGroup.find(x => x.departmentId === dId).list.find(x => x.id === rowId);
		row.checked = !row.checked;

		this.setState({});
	}


	render(){
		var groups = this.props.jobsGroup.map( (x, index) => {
			return <JobGroup {...x} key={index} toggleList={this.toggleList} toggleRowCheck={this.toggleRowCheck}/>
		})

		return <div className="jobs-tree">
			<div className="jobs-tree-header">
				<div className="header-title">{this.props.header}</div>
				<a href="javascript:void(0);" onClick={this.clearAllCheck} >清空</a>
			</div>
			{groups}
		</div>
	}
}





















