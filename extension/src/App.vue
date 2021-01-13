<template>
	<div>
		<button @click="show">Board</button>
		<modal name="board">
			<board v-bind:boardId="boardId" />
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
	},
};
</script>
