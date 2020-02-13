<template>
	<form>
		<label for="decimal">Decimal</label>
		<input id="decimal" v-model="decimal" maxlength="15">
		<label for="octal">Octal</label>
		<input id="octal" v-model="octal" readonly>
		<label for="binary">Binary</label>
		<input id="binary" v-model="binary" readonly>
	</form>
</template>

<script>
export default {
	data() {
		return {
			decimal: '4159265358979'
		};
	},
	computed: {
		octal() {
			return parseInt(this.decimal).toString(8);
		},
		binary() {
			return parseInt(this.decimal).toString(2);
		}
	}
};
</script>

<style scoped>
input {
	width: 100%;
}
</style>
