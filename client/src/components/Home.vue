<template>
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
</template>

<script>
export default {
	name: "Home",

	data() {
		return {
			isConnected: false,
			drawing: false,
			current: {
				color: "black",
				previousDrawTime: 0,
			},
		};
	},

	mounted() {
		this.resize();
	},

	sockets: {
		connect() {
			this.isConnected = true;
		},

		disconnect() {
			this.isConnected = false;
		},
	},

	methods: {
		resize() {
			const canvas = this.$refs.wb;
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
		},

		drawLine(x0, y0, x1, y1, color, emit) {
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
				this.$socket.emit("drawing", {
					x0,
					y0,
					x1,
					y1,
					color: color,
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

		setCurrent(location) {
			this.current = {
				...this.current,
				...location,
			};
		},

		mousedown(e) {
			this.drawing = true;
			this.setCurrent(this.normalizeMouse(e));
		},

		mouseup(e) {
			if (!this.drawing) return;

			const location = this.normalizeMouse(e);
			this.drawLine(
				this.current.x,
				this.current.y,
				location.x,
				location.y,
				this.current.color,
				true
			);

			this.drawing = false;
		},

		onMouseMove(e) {
			if (!this.drawing) return;

			const location = this.normalizeMouse(e);
			this.drawLine(
				this.current.x,
				this.current.y,
				location.x,
				location.y,
				this.current.color,
				true
			);

			this.setCurrent(location);
		},

		throttle(e) {
			const time = new Date().getTime();
			if (time - this.current.previousDrawTime >= 10) {
				this.current.previousDrawTime = time;
				this.onMouseMove(e);
			}
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
