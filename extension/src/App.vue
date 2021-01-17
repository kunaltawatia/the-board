<template>
	<div>
		<div
			jsshadow=""
			role="button"
			class="uArJ5e UQuaGc kCyAyd QU4Gid foXzLb IeuGXd"
			jscontroller="VXdfxd"
			jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
			aria-label="Whiteboard"
			aria-disabled="false"
			tabindex="0"
			data-tooltip="Whiteboard"
			aria-expanded="false"
			data-tab-id="1"
			data-tooltip-vertical-offset="-12"
			data-tooltip-horizontal-offset="0"
			@click="show"
		>
			<div class="Fvio9d MbhUzd" jsname="ksKsZd"></div>
			<div class="e19J0b CeoRYc"></div>
			<span jsslot="" class="l4V7wb Fxmcue"
				><span class="NPEfkd RveJvd snByac"
					><div class="ZaI3hb">
						<div class="gV3Svc">
							<span class="DPvwYc sm8sCf azXnTb" aria-hidden="true">
								<svg
									class="Hdh4hc cIGbvc NMm5M svg"
									focusable="false"
									height="28"
									width="28"
									viewBox="0 0 512 512"
								>
									<g>
										<path
											d="m489.5 422h-467c-12.406 0-22.5-10.093-22.5-22.5v-287c0-12.407 10.094-22.5 22.5-22.5h317c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-317c-4.136 0-7.5 3.364-7.5 7.5v264.5h16.285c-.832-2.347-1.285-4.872-1.285-7.5v-30c0-12.407 10.094-22.5 22.5-22.5h74c12.406 0 22.5 10.093 22.5 22.5v30c0 2.628-.453 5.153-1.285 7.5h166.285c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5h-299v7.5c0 4.136 3.364 7.5 7.5 7.5h467c4.136 0 7.5-3.364 7.5-7.5v-7.5h-150c-8.691 0-15-9.462-15-22.5s6.309-22.5 15-22.5h120c8.691 0 15 9.462 15 22.5 0 2.667-.264 5.183-.758 7.5h15.758v-264.5c0-4.136-3.364-7.5-7.5-7.5h-120c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h120c12.406 0 22.5 10.093 22.5 22.5v287c0 12.407-10.094 22.5-22.5 22.5zm-92.701-45h68.679c.658-1.192 1.522-3.786 1.522-7.5s-.864-6.308-1.522-7.5h-68.679zm-48.277 0h33.276v-15h-33.276c-.658 1.192-1.522 3.786-1.522 7.5s.864 6.308 1.522 7.5zm-296.022 0h74c4.136 0 7.5-3.364 7.5-7.5v-7.5h-89v7.5c0 4.136 3.364 7.5 7.5 7.5zm414.5-15h.01zm-422-15h89v-7.5c0-4.136-3.364-7.5-7.5-7.5h-74c-4.136 0-7.5 3.364-7.5 7.5z"
										/>
									</g>
								</svg>
							</span>
						</div></div></span
			></span>
		</div>
		<modal name="board" width="80%" height="80%">
			<board v-bind:boardId="boardId" v-bind:close="close" />
		</modal>
	</div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
	components: { Board },
	name: "App",
	data() {
		return {
			boardId: this.$route.path.split("/")[1],
		};
	},
	methods: {
		show() {
			let defaulter = document.querySelector(".lvE3se");
			if (defaulter) defaulter.style.transform = "none";
			setTimeout(() => {
				this.$modal.show("board");
			}, 200);
		},
		close() {
			this.$modal.hide("board");
		},
	},
};
</script>

<style scoped>
.svg {
	stroke: currentColor;
	stroke-width: 12;
}
</style>
