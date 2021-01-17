import Vue from "vue";
import VueHotkey from "v-hotkey";
import VModal from "vue-js-modal";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import router from "./router.js";

const socket = SocketIO("http://localhost:3000");

Vue.config.productionTip = false;

Vue.use(VueHotkey);

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: socket,
	})
);

Vue.use(VModal);

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount("#app");
