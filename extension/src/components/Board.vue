<template>
	<div class="board" v-hotkey="keymap">
		<div id="whiteboard-container">
			<canvas
				id="whiteboard"
				ref="wb"
				v-on:mousedown="mousedown"
				v-on:mouseup="mouseup"
				v-on:mouseout="mouseup"
				v-on:mousemove="throttle"
			/>
		</div>
		<div class="action-container">
			<div>
				<button
					v-for="color in colors"
					v-bind:key="color"
					:style="{ 'background-color': color }"
					class="fab"
					@click="
						(event) => {
							event.stopPropagation(),
							changeColor(color);
						}
					"
				>
					<span>{{ color }} {{ `\n( ${key[color]} )` }}</span>
				</button>
				<button
					class="fab"
					@click="
						(event) => {
							event.stopPropagation();
							clear(true);
						}
					"
				>
					<span>{{ `clear \n( ${key.clear} )` }}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="12"
						height="12"
						viewBox="0 0 21 22"
					>
						<defs>
							<clipPath id="clip-path">
								<rect width="21" height="22" fill="none" />
							</clipPath>
						</defs>
						<g id="x" clip-path="url(#clip-path)">
							<line
								id="Line_1169"
								data-name="Line 1169"
								x1="21"
								y2="22"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<line
								id="Line_1170"
								data-name="Line 1170"
								x2="21"
								y2="22"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
				</button>
				<button class="fab" @click="download">
					<span>{{ `download \n( ${key.download} )` }}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="12"
						height="12"
						viewBox="0 0 24 21"
					>
						<defs>
							<clipPath id="clip-path">
								<rect width="24" height="21" fill="none" />
							</clipPath>
						</defs>
						<g id="download" clip-path="url(#clip-path)">
							<path
								id="Path_971"
								data-name="Path 971"
								d="M27,15v4c0,1.1-1.194,2-2.667,2H5.667C4.194,21,3,20.1,3,19V15"
								transform="translate(-3)"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<path
								id="Path_972"
								data-name="Path 972"
								d="M7,10l8,5,8-5"
								transform="translate(-3 -1.385)"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<line
								id="Line_980"
								data-name="Line 980"
								y1="12"
								transform="translate(12)"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
				</button>
			</div>
			<div>
				<button class="fab" @click="decreaseStrokeWidth">
					<span>{{
						`decrease stroke width \n( ${key["decrease stroke width"]} )`
					}}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="12"
						height="2"
						viewBox="0 0 21 2"
					>
						<defs>
							<clipPath id="clip-path">
								<rect width="19" fill="none" />
							</clipPath>
						</defs>
						<g
							id="minus"
							transform="translate(1 1)"
							clip-path="url(#clip-path)"
						>
							<line
								id="minus-2"
								data-name="minus"
								x2="19"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
				</button>
				<p style="font-family: 'Roboto', arial, sans-serif; color: #707070">
					{{ current.strokeWidth / 2 }}
				</p>
				<button class="fab" @click="increaseStrokeWidth">
					<span>{{
						`increase stroke width \n( ${key["increase stroke width"]} )`
					}}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="12"
						height="12"
						viewBox="0 0 25 25"
					>
						<defs>
							<clipPath id="clip-path">
								<rect width="25" height="25" fill="none" />
							</clipPath>
						</defs>
						<g id="plus" clip-path="url(#clip-path)">
							<line
								id="Line_1082"
								data-name="Line 1082"
								y2="25"
								transform="translate(13)"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
							<line
								id="Line_1083"
								data-name="Line 1083"
								x2="25"
								transform="translate(0 13)"
								fill="none"
								stroke="#707070"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</g>
					</svg>
				</button>
			</div>
		</div>
		<div v-if="!connected" class="loading-container">
			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
	name: "Board",
	props: ["boardId", "close"],
	data() {
		return {
			connected: false,
			drawing: false,
			current: {
				color: "black",
				previousDrawTime: 0,
				strokeWidth: 2,
			},
			colors: ["black", "red", "blue", "green", "yellow", "white"],
			key: {
				black: "p",
				red: "r",
				blue: "b",
				green: "g",
				yellow: "y",
				white: "e",
				clear: "c",
				download: "d",
				"increase stroke width": "]",
				"decrease stroke width": "[",
			},
		};
	},

	mounted() {
		this.resize();
		this.$socket.emit("getBoard", this.boardId);
	},

	sockets: {
		draw(data) {
			const { slug, action } = data;
			if (this.boardId == slug) {
				this.drawAction(action);
			}
		},

		drawBurst(actions) {
			this.connected = true;
			for (let action of actions) {
				this.drawAction(action);
			}
		},

		clear() {
			this.clear();
		},
	},

	methods: {
		decreaseStrokeWidth(event) {
			event?.stopPropagation?.();
			this.current.strokeWidth = Math.max(2, this.current.strokeWidth - 2);
		},
		increaseStrokeWidth(event) {
			event?.stopPropagation?.();
			this.current.strokeWidth = Math.min(32, this.current.strokeWidth + 2);
		},

		resize() {
			const canvas = this.$refs.wb;
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight - 4;
			var context = canvas.getContext("2d");
			context.fillStyle = "white";
			context.fillRect(0, 0, canvas.width, canvas.height);
		},

		drawAction(data) {
			const { x0, y0, x1, y1, color, strokeWidth } = data;
			this.drawLine(x0, y0, x1, y1, color, strokeWidth, false);
		},

		drawLine(x0, y0, x1, y1, color, strokeWidth, emit = false) {
			const canvas = this.$refs.wb;
			var context = canvas.getContext("2d");
			var w = canvas.width;
			var h = canvas.height;

			context.beginPath();
			context.moveTo(x0 * w, y0 * h);
			context.lineTo(x1 * w, y1 * h);
			context.strokeStyle = color;
			context.lineWidth = strokeWidth;
			context.stroke();
			context.closePath();

			if (emit) {
				this.$socket.emit("draw", {
					slug: this.boardId,
					action: { x0, y0, x1, y1, color, strokeWidth },
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
				this.current.strokeWidth,
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
			e?.stopPropagation?.();
			this.drawing = true;
			this.setCurrent(this.normalizeMouse(e));
		},

		mouseup(e) {
			e?.stopPropagation?.();
			if (!this.drawing) return;
			this.addStroke(e);
			this.drawing = false;
		},

		mousemove(e) {
			e?.stopPropagation?.();
			if (!this.drawing) return;
			this.addStroke(e);
			this.setCurrent(this.normalizeMouse(e));
		},

		throttle(e) {
			e?.stopPropagation?.();
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

		changeColor(color) {
			if (this.current.color === "white" && color !== "white") {
				this.current.strokeWidth = 2;
			} else if (color == "white") {
				this.current.strokeWidth = 32;
			}
			this.current.color = color;
		},

		download(event) {
			event?.stopPropagation?.();
			const canvas = this.$refs.wb;
			let image = canvas.toDataURL("image/jpeg", 1.0);

			var pdf = new jsPDF();

			let width = pdf.internal.pageSize.getWidth();
			let height = (canvas.height * width) / canvas.width;
			pdf.addImage(image, "JPEG", 0, 0, width, height);
			pdf.save(`Canvas-${new Date().toLocaleString()}.pdf`);

			// 	.replace("image/jpeg", "image/octet-stream");
			// let a = document.createElement("a");
			// a.href = image;
			// a.download = "image.jpeg";
			// a.hidden = true;
			// document.body.appendChild(a);
			// a.click();
			// document.body.removeChild(a);
		},
	},

	computed: {
		keymap() {
			return {
				"]": this.increaseStrokeWidth,
				"[": this.decreaseStrokeWidth,
				c: this.clear,
				d: this.download,
				r: () => this.changeColor("red"),
				g: () => this.changeColor("green"),
				b: () => this.changeColor("blue"),
				y: () => this.changeColor("yellow"),
				p: () => this.changeColor("black"),
				e: () => this.changeColor("white"),
			};
		},
	},
};
</script>

<style>
.vm--modal {
	border-radius: 12px;
	overflow: visible;
}

.board {
	display: flex;
	flex-direction: column;
	height: calc(100% - 24px);
	padding: 12px;
	border-radius: 12px;
	background-color: #f8f8f8;
}

#whiteboard-container {
	border: 2px dashed #707070;
	flex-grow: 1;
	border-radius: 10px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#whiteboard {
	height: 100%;
	width: 100%;
}

.action-container {
	display: flex;
	align-items: center;
	margin-top: 8px;
	justify-content: space-between;
}

.action-container > * {
	display: flex;
	align-items: center;
}

.fab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 28px;
	width: 28px;
	border-radius: 50%;
	margin: 6px;
	border: 1px solid #eeeeee;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	position: relative;
}

.fab > span {
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.4s;

	text-transform: capitalize;
	white-space: pre;

	position: absolute;
	z-index: 1;
	bottom: 125%;
	background-color: rgb(51, 51, 51);
	color: rgb(239, 239, 239);
	font-family: "Roboto", arial, sans-serif;
	border-radius: 4px;
	font-size: 12px;
	padding: 4px 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.fab > span::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: rgb(51, 51, 51) transparent transparent transparent;
}

.fab:hover > span {
	visibility: visible;
	opacity: 1;
}

button {
	outline: none;
	border: none;
	cursor: pointer;
	background-color: white;
	padding: 0;
}

button:focus {
	outline: none;
}

.loading-container {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100% - 24px);
	width: calc(100% - 24px);
	background-color: #eeeeee;
	border-radius: 8px;
}
.lds-ripple {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}
.lds-ripple div {
	position: absolute;
	border: 4px solid rgb(125, 123, 123);
	opacity: 1;
	border-radius: 50%;
	animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
	animation-delay: -0.5s;
}
@keyframes lds-ripple {
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
}
</style>
