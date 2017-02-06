import React, { Component } from 'react';
class MyMap extends Component {
	constructor(props) {
        super(props);
    }
    componentDidMount(){
    	var map = new window.AMap.Map("container", {
            resizeEnable: true,
             zoom:11
        });
    };
	render() {
		return (
	  		<div></div>
		);
  	}
}

export default MyMap;