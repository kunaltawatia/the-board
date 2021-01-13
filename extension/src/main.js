import Vue from "vue";
import VModal from "vue-js-modal";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import router from "./router";

const socket = SocketIO("http://localhost:3000");

Vue.config.productionTip = false;

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: socket,
	})
);

Vue.use(VModal);

function mount() {
	console.log("Checking to Mount...");
	let buttonBar = document.querySelector(".NzPR9b");
	if (buttonBar) {
		let element = document.createElement("div", { id: "vue-extension" });
		buttonBar.prepend(element);
		new Vue({
			router,
			render: (h) => h(App),
		}).$mount(element);
		console.log("Mounted!");
	} else {
		setTimeout(mount, 1000);
	}
	return;
}

mount();
