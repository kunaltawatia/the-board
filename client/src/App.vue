<template>
	<div id="join">
		<span>Enter board id:</span>
		<form>
			<input type="text" name="boardurl" required />
			<input type="submit" value="Join" @click="show" />
		</form>
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
			boardId: "",
		};
	},
	methods: {
		show(e) {
			e.preventDefault();
			this.boardId = document.querySelector('input[name="boardurl"]').value;
			this.$modal.show("board");
		},
		close() {
			this.$modal.hide("board");
		},
	},
};
</script>

<style scoped></style>
