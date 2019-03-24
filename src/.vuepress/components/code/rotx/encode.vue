<template>
	<form>
		<label for="rot">Rotation</label>
		<select id="rot" v-model="rot">
			<option v-for="n in 25" :value="n">{{n}}</option>
		</select>
		<textarea id="plain" v-model="plain" />
		<textarea id="cypher" v-model="cypher" readonly />
	</form>
</template>

<script>
	const rotx = require("./rotx");
	export default {
		data() {
			return {
				plain: "",
				rot: 13
			};
		},
		computed: {
			cypher() {
				return rotx.rot(this.plain, this.rot);
			}
		}
	};
</script>

<style scoped>
	form {
		margin-top: 4em;
	}

	#rot {
		margin-bottom: 2em;
		display: block;
		padding: 0.5em;
	}

	#cypher,
	#plain {
		width: 40%;
		height: 5em;
	}
</style>
