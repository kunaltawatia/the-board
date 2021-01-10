<template>
	<div id="join">
		<span>Enter board id:</span>
		<form>
			<input type="text" name="boardurl" required>
			<input type="submit" value="Join" @click="joinBoard">
		</form>
	</div>
</template>

<script>
export default {
	name: 'Join',
	methods: {
		joinBoard(e) {
			e.preventDefault();
			this.$router.push(`/create/${document.querySelector('input[name="boardurl"]').value}`)
		}
	},
}
</script>

<style scoped>

</style>