import Vue from "vue";
import VueHotkey from "v-hotkey";
import VModal from "vue-js-modal";
// import SocketIO from "socket.io-client";
// import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import router from "./router.js";

// const socket = SocketIO(
// 	process.env.NODE_ENV == "development"
// 		? "http://localhost:3000"
// 		: "https://extension-v2.webug.space"
// );

Vue.config.productionTip = false;

Vue.use(VueHotkey);

// Vue.use(
// 	new VueSocketIO({
// 		debug: true,
// 		connection: socket,
// 	})
// );

Vue.use(VModal);

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount("#app");
