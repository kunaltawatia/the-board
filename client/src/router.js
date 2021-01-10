import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Board from "./components/Board";
import Join from "./components/Join";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/board/:slug",
			name: "Board",
			component: Board,
		},
		{
			path: "/join",
			name: "Join",
			component: Join,
		},
	],
});
