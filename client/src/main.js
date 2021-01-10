import Vue from "vue";
import App from "./App.vue";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import router from "./router.js";

const socket = SocketIO("http://localhost:3000");

Vue.config.productionTip = false;

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: socket,
	})
);

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount("#app");
