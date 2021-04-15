import Vue from "vue";
import VueHotkey from "v-hotkey";
import VModal from "vue-js-modal";
// import SocketIO from "socket.io-client";
// import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import router from "./router.js";

// const socket = SocketIO("https://extension-v2.webug.space");

Vue.config.productionTip = false;

Vue.use(VueHotkey);

// Vue.use(
// 	new VueSocketIO({
// 		debug: true,
// 		connection: socket,
// 	})
// );

Vue.use(VModal);

const mount = () => {
	let buttonBar = document.querySelector(".NzPR9b");
	let meetboard = document.getElementById("meetboard-mount");
	if (document.scripts._ij) eval(document.scripts._ij.innerHTML);
	let email = null;
	window.IJ_values?.forEach((element) => {
		if (
			element?.match?.(
				/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
			)
		)
			email = element;
	});
	if (email && buttonBar && !meetboard) {
		window.email = email;
		let element = document.createElement("div", { id: "vue-extension" });
		buttonBar.innerHTML = '<div class="qO3Z3c"></div>' + buttonBar.innerHTML; // add divider
		buttonBar.prepend(element);
		new Vue({
			router,
			render: (h) => h(App),
		}).$mount(element);
		console.log("whiteboard mounted!");
	}
};

setInterval(mount, 1000);
