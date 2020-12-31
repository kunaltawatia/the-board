const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
	cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"],
	},
});

const port = parseInt(process.env.PORT || "3000");

app.get("/", (req, res) => res.send("server running!"));

http.listen(port);

/**
 * SOCKETS AHEAD !
 */

let actions = [];

io.on("connection", (socket) => {
	socket.emit("drawBurst", actions);

	socket.on("draw", (data) => {
		actions.push(data);
		socket.broadcast.emit("draw", data);
	});
});
