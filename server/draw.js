require("dotenv").config();
const redis = require("redis");

const fs = require("fs");
const { createCanvas } = require("canvas");

const client = redis.createClient(process.env.REDIS_URL, {
	password: process.env.REDIS_PASS,
});

function saveKey(key) {
	const width = 1920;
	const height = 1080;

	const canvas = createCanvas(width, height);
	const context = canvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);

	function drawAction(data) {
		const { x0, y0, x1, y1, color, strokeWidth } = data;
		drawLine(x0, y0, x1, y1, color, strokeWidth, false);
	}

	function drawLine(x0, y0, x1, y1, color, strokeWidth, emit = false) {
		var w = canvas.width;
		var h = canvas.height;

		context.beginPath();
		context.moveTo(x0 * w, y0 * h);
		context.lineTo(x1 * w, y1 * h);
		context.strokeStyle = color;
		context.lineWidth = strokeWidth;
		context.stroke();
		context.closePath();
	}

	client.lrange(key, 0, -1, (err, reply) => {
		if (err) {
			console.error(err);
			return;
		}
		let data = reply.map(JSON.parse);
		data.forEach((element) => {
			drawAction(element);
		});
		const buffer = canvas.toBuffer("image/png");
		fs.writeFileSync(`./images/${key}.png`, buffer);
	});
}

client.keys("*", (err, res) => {
	if (err) console.error(err);
	for (let index = 0; index < res.length; index++) {
		const element = res[index];
		saveKey(element);
	}
});
