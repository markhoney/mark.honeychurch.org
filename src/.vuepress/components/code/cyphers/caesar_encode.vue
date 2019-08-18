<template>
	<form>
		<label for="caesar">Rotation</label>
		<select id="caesar" v-model="rotation">
			<option v-for="n in 25" :value="n">{{n}}</option>
		</select>
		<textarea id="plain" v-model="plain" />
		<textarea id="cypher" v-model="cypher" readonly />
	</form>
</template>

<script>
	const caesar = require("./caesar");
	export default {
		data() {
			return {
				plain: "",
				rotation: 13,
			};
		},
		computed: {
			cypher() {
				return caesar.rotate(this.plain, this.rotation);
			}
		}
	};
</script>

<style scoped>
	form {
		margin-top: 4em;
	}

	#caesar {
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
