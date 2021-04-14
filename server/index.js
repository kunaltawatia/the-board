require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
	cors: {
		origin: [
			"https://meet.google.com",
			"http://localhost:8080",
			"http://localhost:3000",
		],
		methods: ["GET", "POST"],
	},
});

const redis = require("redis");
const { createAdapter } = require("socket.io-redis");

const client =
	process.env.STORE == "redis"
		? process.env.REDIS == "remote"
			? redis.createClient(process.env.REDIS_URL, {
					password: process.env.REDIS_PASS,
			  })
			: redis.createClient()
		: null;

const pubClient = client;
const subClient = pubClient?.duplicate?.() ?? null;
if (process.env.STORE == "redis")
	io.adapter(createAdapter({ pubClient, subClient }));

const port = parseInt(process.env.PORT || "3000");

app.use(express.static("dist"));

http.listen(port);

/**
 * SOCKETS AHEAD !
 */

class LocalStore {
	actions = {};
	putData = ({ slug, action }) => {
		if (slug in this.actions) this.actions[slug].push(action);
		else this.actions[slug] = [action];
	};
	getData = (slug, cb) => {
		let data = null;
		if (slug in this.actions) data = this.actions[slug];
		else data = [];
		cb(data);
	};
	clearData = (slug) => {
		if (slug in this.actions) delete this.actions[slug];
	};
}

class RedisStore {
	putData = ({ slug, action }) => {
		if (!slug) return;
		const start = Date.now();
		client.rpush(slug, JSON.stringify(action));
	};
	getData = (slug, cb) => {
		if (!slug) return cb([]);
		const start = Date.now();
		client.lrange(slug, 0, -1, (err, reply) => {
			let data = null;
			if (!err) data = reply.map(JSON.parse);
			cb(data ?? []);
		});
	};
	clearData = (slug) => {
		if (!slug) return;
		const start = Date.now();
		client.del(slug);
	};
}

const store =
	process.env.STORE == "redis" ? new RedisStore() : new LocalStore();

io.on("connection", (socket) => {
	socket.on("getBoard", (slug) => {
		store.getData(slug, (data) => socket.emit("drawBurst", data));
	});

	socket.on("draw", (data) => {
		store.putData(data);
		socket.broadcast.emit("draw", data);
	});

	socket.on("clear", (slug) => {
		store.clearData(slug);
		socket.broadcast.emit("clear");
	});
});
