import React ,{Component} from 'react'
import {render} from 'react-dom';
require('./jobs-tree.scss');

class JobRow extends Component {
	constructor(props){
		super(props);
	}

	toggleCheck = ()=>{
		this.props.toggleRowCheck(this.props.dId, this.props.id);
	}

	render(){
		return <li>
			<input type="checkbox" checked={this.props.checked} onChange={this.toggleCheck}/>
			<span>{this.props.name}</span>
			<span className='count'>{this.props.count}</span>
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
			count: this.props.list.reduce((count, x) => count + parseInt(x.count), 0)
		}
	}

	toggleList = () => {
		this.props.toggleList(this.props.departmentId);
	}

	render(){
		return <div className="jobs-group">
			<div className="group-header">
				<input type="checkbox" checked={this.props.checked} onChange={this.toggleList} />
				<span>{this.props.department}</span>
				<div className="expand-collaps-button expand"></div>
				<span className='count jobs-group-count'>{this.state.count}</span>
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
		this.props.actions.resetAllCheck && this.props.actions.resetAllCheck();
		this.setState({});
		
	}

	toggleList = (dId) => {
		this.props.actions.toggleList && this.props.actions.toggleList(dId);
		this.setState({});
	}

	toggleRowCheck = (dId, rowId) => {
		this.props.actions.toggleRowCheck && this.props.actions.toggleRowCheck(dId, rowId);
		this.setState({});
	}


	render(){
		var groups = this.props.data.jobsGroup.map( (x, index) => {
			return <JobGroup {...x} key={index} toggleList={this.toggleList} toggleRowCheck={this.toggleRowCheck}/>
		})

		return <div className="jobs-tree">
			<div className="jobs-tree-header">
				<span className="header-title">{this.props.data.header}</span>
				<a href="javascript:void(0);" className="clear-btn" onClick={this.clearAllCheck} >清空</a>
			</div>
			{groups}
		</div>
	}
}





















