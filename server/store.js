require("dotenv").config();
const redis = require("redis");

const fs = require("fs");
const { createCanvas } = require("canvas");
const { exit } = require("process");

const client = redis.createClient(process.env.REDIS_URL, {
	password: process.env.REDIS_PASS,
});

let total = 0,
	totalWritten = 0,
	totalDeleted = 0;

function saveKey(key, del = false) {
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
		fs.writeFile(`./images/${key}.png`, buffer, (err) => {
			totalWritten++;
			if (err) {
				console.error(err);
				checkDone();
				return;
			}
			console.log(key, "written");
			checkDone();
		});
		if (del)
			client.del(key, (err) => {
				totalDeleted++;
				if (err) {
					console.error(err);
					checkDone();
					return;
				}
				console.log(key, "deleted");
				checkDone();
			});
	});
}

let del = process.env.CLEAR_REDIS === "true" ? true : false;
function checkDone() {
	if (!total || ((!del || total == totalDeleted) && total == totalWritten))
		close();
}

function close() {
	client.quit();
	exit(0);
}

client.keys("*", (err, res) => {
	if (err) console.error(err);
	total = res.length;
	console.log("Total boards", total);
	for (let index = 0; index < total; index++) {
		const element = res[index];
		console.log(element, "started");
		saveKey(element, del);
	}
	checkDone();
});
