import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Create from './components/Create';
import Join from './components/Join';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/create/:slug',
			name: 'Create',
			component: Create
		},
		{
			path: '/join',
			name: 'Join',
			component: Join
		}
	]
});