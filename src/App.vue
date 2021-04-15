<template>
	<div id="app">
		<button v-on:click="sit">Sit</button>
	</div>
</template>

<script>
import HttpRequests from './services/http.js';

export default {
	name: 'App',
	methods:{
		async sit() {
			try {
				console.log("starting!!!")
				const input = {
					balance: 20,
				}
				HttpRequests.sit(input);
				//console.log(response);
			} catch(error) {
				//console.log(error);
			}
		}
	},
	components: {}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
