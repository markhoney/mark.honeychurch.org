<template>
	<form>
		<label for="caesar_decode">Guessed Rotation</label>
		<input readonly id="caesar_decode" v-model="rotation">
		<textarea class="cypher" v-model="cypher" />
		<textarea class="plain" v-model="plain" readonly />
	</form>
</template>

<script>
	const caesar = require("./caesar");
	export default {
		data() {
			return {
				cypher: "",
			};
		},
		computed: {
			rotation() {
				return caesar.rotation(this.cypher);
			},
			plain() {
				return caesar.rotate(this.cypher, 26 - this.rotation);
			}
		}
	};
</script>

<style scoped>
	form {
		margin-top: 4em;
	}

	#caesar_decode {
		display: block;
		width: 2.5em;
		padding: 0.5em;
		padding-left: 1em;
		padding-right: 0;
		margin-bottom: 2em;
	}

	.cypher,
	.plain {
		width: 40%;
		height: 5em;
	}
</style>
