import Vue from "vue";
import App from "./App.vue";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

const socket = SocketIO("http://localhost:3000");

Vue.config.productionTip = false;

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: socket,
	})
);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
