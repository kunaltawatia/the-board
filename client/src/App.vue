<template>
	<div id="join">
		<label>Enter Board ID</label>
		<form>
			<input type="text" name="boardurl" required />
			<button id="submit" type="submit" @click="show">Join</button>
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

#join {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

#join > * {
	margin: 4px;
}

label {
	font-family: "Poppins", Arial, Helvetica, sans-serif;
	font-weight: 600;
	font-size: 24px;
	color: rgb(53, 53, 53);
}

input {
	border-radius: 24px;
	border: 1px dashed #707070;
	background-color: white;
	margin: 4px;
	padding: 6px 24px;
	font-family: "Poppins", Arial, Helvetica, sans-serif;
}

input:focus {
	outline: none;
}

#submit {
	font-family: "Poppins", Arial, Helvetica, sans-serif;
	font-weight: 600;
	color: #707070;
	margin: 2px;
	padding: 2px 8px;
	border: 2px solid gray;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

#submit:hover {
	background-color: #f1f1f1;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
