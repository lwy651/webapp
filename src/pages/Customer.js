import React, { Component } from 'react';
class Customer extends Component{
	render()
	{
		return(
			<div>
	  			客服系统
	  			<div className='weui-cells'>
	  				<div class="weui-cell__hd">
	  					<label class="weui-label">qq</label>
	  				</div>
	                <div className="weui-cell__bd">
	                    <input className="weui-input" type="text" placeholder="请输入聊天内容"/>
	                </div>
	  			</div>
	  		</div>
		);
	}
}

export default Customer;