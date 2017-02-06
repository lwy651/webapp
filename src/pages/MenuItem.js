import React, { Component } from 'react';
import { Link } from 'react-router';
class MenuItem extends Component {

	constructor(props) {
    	super(props);
    	this.state = props.data;
    	this.BtnClick = this.BtnClick.bind(this);
  	}

  	BtnClick(){
  		console.log(this.state.name);
  		alert(this.state.name);
  	}

  	render() {
		return (
	  		// <div className="menu_btn" onClick={this.BtnClick}>
	  		<Link className="menu_btn" to={{ pathname: '/repair', query: { name: this.state.name } }}>
				<div className="containerBox">
					<div className="picture">
						<img src={this.state.img}></img>
					</div>
					<div className="name">
						<span>{this.state.name}</span>
					</div>
				</div>
			</Link>
			// </div>
		);
  	}
}

export default MenuItem;