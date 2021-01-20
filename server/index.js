const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
	cors: {
		origin: "*",
	},
});
const shajs = require("sha.js");

const port = parseInt(process.env.PORT || "3000");

app.use(express.static("dist"));
app.get("/", (req, res) => res.send("server running!"));

http.listen(port);

/**
 * SOCKETS AHEAD !
 */

let actions = {};

const putData = ({ slug, action }) => {
	if (slug in actions) actions[slug].push(action);
	else actions[slug] = [action];
};

const getData = (slug) => {
	if (slug in actions) return actions[slug];
	else return [];
};

const clearData = (slug) => {
	if (slug in actions) delete actions[slug];
};

io.on("connection", (socket) => {
	socket.on("newBoard", () => {
		const timestamp = Date.now();
		const ip = socket.handshake.address;
		const slug = shajs("sha256").update(`${ip}000${timestamp}`).digest("hex");
		socket.emit("newBoard", slug);
	});

	socket.on("getBoard", (slug) => {
		socket.emit("drawBurst", getData(slug));
	});

	socket.on("draw", (data) => {
		putData(data);
		socket.broadcast.emit("draw", data);
	});

	socket.on("clear", (slug) => {
		clearData(slug);
		socket.broadcast.emit("clear");
	});
});
