import React, { Component } from 'react';
import logo from './logo.svg';
import MenuItem from './pages/MenuItem';

var menu = [
	{id:0,name:'空调',img:'./images/kongtiao.png'},
	{id:1,name:'洗衣机',img:'./images/xiyiji.png'},
	{id:2,name:'热水器',img:'./images/reshuiqi.png'},
	{id:3,name:'燃气灶',img:'./images/ranqizao.png'},
	{id:4,name:'冰箱',img:'./images/bingxiang.png'},
	{id:5,name:'电视',img:'./images/dianshi.png'},
	{id:6,name:'下水管',img:'./images/xiashuidao.png'},
	{id:7,name:'下水管',img:'./images/xiashuidao.png'},
	{id:8,name:'下水管',img:'./images/xiashuidao.png'}
]

class App extends Component {
  	render() {
		return (
			<div>
				<div className='menu'>
					{
						menu.map((data)=>
							<MenuItem key={data.id} data={data}/>
						)
					}
				</div>
	  		</div>
		);
  	}
}

export default App;
	