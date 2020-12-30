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

app.get("/", function (req, res) {
	res.send("server running!");
});

http.listen(port);

io.on("connection", function (socket) {
	console.log("Connected!");

	socket.on("refreshTime", () => {
		socket.emit("time", new Date().toUTCString());
	});

	socket.on("disconnect", () => {
		console.log("Disconnected!");
	});
});
