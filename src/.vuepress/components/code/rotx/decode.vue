<template>
	<form>
		<label for="rotx">Rotation</label>
		<input readonly id="rotx" v-model="rot">
		<textarea id="cypher" v-model="cypher" />
		<textarea id="plain" v-model="plain" readonly />
	</form>
</template>

<script>
	const rotx = require("./rotx");
	export default {
		data() {
			return {
				cypher: ""
			};
		},
		computed: {
			rot() {
				return rotx.decrypt(this.cypher);
			},
			plain() {
				return rotx.rot(this.cypher, 26 - this.rot);
			}
		}
	};
</script>

<style scoped>
	form {
		margin-top: 4em;
	}

	#rotx {
		display: block;
		width: 2.5em;
		padding: 0.5em;
		padding-left: 1em;
		padding-right: 0;
		margin-bottom: 2em;
	}

	#cypher,
	#plain {
		width: 40%;
		height: 5em;
	}
</style>
