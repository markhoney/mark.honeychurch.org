<template>
	<form>
		<textarea id="cypher" v-model="cypher" />
		<textarea id="plain" v-model="plain" readonly />
	</form>
</template>

<script>
	const substitution = require("./substitution");
	export default {
		data() {
			return {
				cypher: "",
			};
		},
		computed: {
			plain() {
				return substitution.decrypt(this.cypher);
			}
		}
	};
</script>

<style scoped>
	form {
		margin-top: 4em;
	}

	#cypher,
	#plain {
		width: 40%;
		height: 5em;
	}
</style>
