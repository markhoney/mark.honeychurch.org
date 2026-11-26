<template>
	<form>
		<input id="text" v-model="text" title="Text">
		<select id="error" v-model="error" title="Error Correction Level">
			<option value="L">L (7%)</option>
			<option value="M">M (15%)</option>
			<option value="Q">Q (25%)</option>
			<option value="H">H (30%)</option>
		</select>
		<input id="slider" type="range" min="100" max="700" v-model.number="size" :title="size + ' px'" />
		<input type="color" v-model="colour">
		<canvas ref="qr" id="qr" :width="size" :height="size" title="Right click to save" />
	</form>
</template>

<script>
	import QRCode from 'qrcode';
	export default {
		data() {
			return {
				text: "https://mark.honeychurch.org/",
				size: 300,
				error: "L",
				colour: "#000000"
			};
		},
		mounted() {
			this.render();
		},
		watch: {
			text() { this.render(); },
			size() { this.render(); },
			error() { this.render(); },
			colour() { this.render(); }
		},
		methods: {
			async render() {
				await QRCode.toCanvas(this.$refs.qr, this.text, {
					width: this.size,
					errorCorrectionLevel: this.error,
					margin: 2,
					color: {dark: this.colour, light: '#ffffff'}
				});
			}
		}
	};
</script>

<style scoped>
	#text {
		width: 80%;
		padding: 0.5em;
		margin-bottom: 2em;
	}

	#error {
		padding: 0.5em;
	}

	#slider {
		width: 80%;
		margin-right: 1em;
		margin-bottom: 2em;
	}

	#qr {
		text-align: center;
		/*height: 700px;*/
	}
</style>
