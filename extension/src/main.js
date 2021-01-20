import Vue from "vue";
import VueHotkey from "v-hotkey";
import VModal from "vue-js-modal";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import router from "./router.js";

const socket = SocketIO("https://extension.webug.space");

Vue.config.productionTip = false;

Vue.use(VueHotkey);

Vue.use(
	new VueSocketIO({
		debug: true,
		connection: socket,
	})
);

Vue.use(VModal);

function mount() {
	console.log("Checking to Mount...");
	let buttonBar = document.querySelector(
		window.history.state ? ".NzPR9b" : "body"
	);
	if (buttonBar) {
		let element = document.createElement("div", { id: "vue-extension" });
		buttonBar.innerHTML = '<div class="qO3Z3c"></div>' + buttonBar.innerHTML; // add divider
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
