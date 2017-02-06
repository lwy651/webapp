import React, { Component } from 'react';
import { Link } from 'react-router';

class Tabbar extends Component{
	render()
	{
		return(
			<div>
	  			<div className='web_tabbar'>
	  				<Link activeClassName='web_tabbar_item_active' className='web_tabbar_item' to='/home'>
		  				<span>
	                        <img src="./images/icons/home.svg" alt="" className='tabbar_icon'/>
	                    </span>
	  					<p className='tabbar_label'>主页</p>
	  				</Link>
	  				<Link activeClassName='web_tabbar_item_active' className='web_tabbar_item' to='/customer'>
		  				<span>
	                        <img src="./images/icons/community_light.svg" alt="" className='tabbar_icon'/>
	                    </span>
	  					<p className='tabbar_label'>客服中心</p>
	  				</Link>
	  				<Link activeClassName='web_tabbar_item_active' className='web_tabbar_item' to='/repair'>
		  				<span>
	                        <img src="./images/icons/my.svg" alt="" className='tabbar_icon'/>
	                    </span>
	  					<p className='tabbar_label'>个人中心</p>
	  				</Link>
	  			</div>
	  			{this.props.children}
	  		</div>
		);
	}
}

export default Tabbar;