<template>
	<div>
		<div class="linkToBoard">Share: {{ boardId }}</div>
		<div id="whiteboard-container" v-on:resize="resize">
			<canvas
				id="whiteboard"
				ref="wb"
				v-on:mousedown="mousedown"
				v-on:mouseup="mouseup"
				v-on:mouseout="mouseup"
				v-on:mousemove="throttle"
			/>
		</div>
		<button @click="() => clear(true)">clear</button>
	</div>
</template>

<script>
export default {
	name: "Board",
	data() {
		return {
			isConnected: false,
			drawing: false,
			current: {
				color: "black",
				previousDrawTime: 0,
			},
			boardId: "",
		};
	},

	created() {
		const url = window.location.pathname;
		this.boardId = url.split("/")[2];
	},

	mounted() {
		this.resize();
		this.$socket.emit("getBoard", this.boardId);
	},

	sockets: {
		connect() {
			this.isConnected = true;
		},

		disconnect() {
			this.isConnected = false;
		},

		draw(data) {
			const { slug, action } = data;
			if (this.boardId == slug) {
				this.drawAction(action);
			}
		},

		drawBurst(actions) {
			for (let action of actions) {
				this.drawAction(action);
			}
		},

		clear() {
			this.clear();
		},
	},

	methods: {
		resize() {
			const canvas = this.$refs.wb;
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
		},

		drawAction(data) {
			const { x0, y0, x1, y1, color } = data;
			this.drawLine(x0, y0, x1, y1, color, false);
		},

		drawLine(x0, y0, x1, y1, color, emit = false) {
			const canvas = this.$refs.wb;
			var context = canvas.getContext("2d");
			var w = canvas.width;
			var h = canvas.height;

			context.beginPath();
			context.moveTo(x0 * w, y0 * h);
			context.lineTo(x1 * w, y1 * h);
			context.strokeStyle = color;
			context.lineWidth = 2;
			context.stroke();
			context.closePath();

			if (emit) {
				this.$socket.emit("draw", {
					slug: this.boardId,
					action: { x0, y0, x1, y1, color },
				});
			}
		},

		normalizeMouse(e) {
			let { clientX: x, clientY: y } = e;
			const canvas = this.$refs.wb;
			const rect = canvas.getBoundingClientRect();

			x -= rect.x;
			x /= rect.width;

			y -= rect.y;
			y /= rect.height;

			return { x, y };
		},

		addStroke(e) {
			const location = this.normalizeMouse(e);
			this.drawLine(
				this.current.x,
				this.current.y,
				location.x,
				location.y,
				this.current.color,
				true
			);
		},

		setCurrent(content) {
			this.current = {
				...this.current,
				...content,
			};
		},

		mousedown(e) {
			this.drawing = true;
			this.setCurrent(this.normalizeMouse(e));
		},

		mouseup(e) {
			if (!this.drawing) return;
			this.addStroke(e);
			this.drawing = false;
		},

		mousemove(e) {
			if (!this.drawing) return;
			this.addStroke(e);
			this.setCurrent(this.normalizeMouse(e));
		},

		throttle(e) {
			const time = new Date().getTime();
			if (time - this.current.previousDrawTime >= 10) {
				this.current.previousDrawTime = time;
				this.mousemove(e);
			}
		},

		clear(emit = false) {
			this.resize();
			if (emit) this.$socket.emit("clear", this.boardId);
		},
	},
};
</script>

<style scoped>
#whiteboard-container {
	height: 90vh;
	width: 90vw;
	border: 2px dashed gray;
	resize: both;
	overflow: auto;
}
#whiteboard {
	height: 98%;
	width: 100%;
}
</style>
