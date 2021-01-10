<template>
	<div id= "home">
		<div @click="changeRoute('create')">Create a Board</div>
		<div @click="changeRoute('join')">Join a Board</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	sockets: {
		newBoard(data) {
			this.$router.push(`/create/${data}`);
		}
	},
	methods: {
		changeRoute(route) {
			if(route == 'create') {
				fetch('http://www.geoplugin.net/json.gp').then((res) => {
					return res.json();
				}).then((data) => {
					const {geoplugin_request} = data;
					this.$socket.emit('newBoard', {
						ip: geoplugin_request,
						timestamp: new Date().getTime()
					});
				});
			} else {
				this.$router.push(`/${route}`);
			}
		}
	}
}
</script>

<style scoped>
#home {
	display: flex;
	flex-direction: column;
	background: #e0e0e0;
	padding: 3rem;
}

#home div {
	margin: 0.5rem;
	padding: 0.5rem 2rem;

	background-color: ivory;
	text-align: center;
	text-decoration: none;
	color: initial;
	cursor: pointer;
}
</style>
