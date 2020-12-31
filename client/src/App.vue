<template>
	<div id="app">
		<Home />
	</div>
</template>

<script>
import Home from "./components/Home";

export default {
	name: "App",
	components: {
		Home,
	},
};
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
