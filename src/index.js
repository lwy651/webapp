import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Tabbar from './pages/Tabbar';
import Repair from './pages/Repair';
import Customer from './pages/Customer';
import './index.css';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

ReactDOM.render(
  	<Router history={browserHistory}>
  		<Route path='/' component={Tabbar}>
  			<IndexRoute component={App} />
  			<Route path='home' component={App} />
  			<Route path='customer' component={Customer} />
  			<Route path='repair' component={Repair} />
  		</Route>
  	</Router>,
  	document.getElementById('root')
);
