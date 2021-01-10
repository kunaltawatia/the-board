const { time } = require("console");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
	cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"],
	},
});
const shajs = require('sha.js');

const port = parseInt(process.env.PORT || "3000");

app.get("/", (req, res) => res.send("server running!"));

http.listen(port);

/**
 * SOCKETS AHEAD !
 */

let actions = [];

const putData = ({slug, action}) => {
	if(actions[slug]) {
		actions[slug].push(action);
	} else {
		actions[slug] = [];
	}
}

const getData = (slug) => {
	if(actions[slug]) {
		return actions[slug];
	} else {
		return [];
	}
}

const clearData = (slug) => {
	actions[slug] = [];
}

io.on("connection", (socket) => {
	const address = socket.handshake.headers.referer.split('/');
	const slug = address[address.length - 1];
	socket.emit("drawBurst", getData(slug));

	socket.on("newBoard", (data) => {
		const {ip, timestamp} = data;
		const slug = shajs('sha256').update(`${ip}000${timestamp}`).digest('hex')
		io.to(socket.id).emit('newBoard', slug);
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
