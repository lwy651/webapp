import React, { Component } from 'react';
import MyMap from './MyMap';

class Repair extends Component {
	constructor(props) {
    	super(props);
    	console.log(props);
    	this.state = props.location.query;
  	}
	render() {
		return (
	  		<div>
	  			<MyMap/>
	  			<div id="container"></div>
	  			{this.state.name}
	  			<div className='web_btn_div'>	
	  				<span className='web_btn'>我要报修</span>
	  			</div>
			</div>
		);
  	}
}
export default Repair;