<template>
	<div>
		<!--<qrcode-stream />
		<qrcode-drop-zone />
		<qrcode-capture />-->
		<client-only>
			<qrcode-stream @decode="onDecode" />
		</client-only>
		<div>{{data}}</div>
	</div>
</template>

<script>
	import {QrcodeStream, QrcodeDropZone, QrcodeCapture} from 'vue-qrcode-reader';
	export default {
		components: {
			QrcodeStream,
			QrcodeDropZone,
			QrcodeCapture,
		},
		data() {
			return {
				data: null,
			};
		},
		methods: {
			onDecode (decodedString) {
				this.data = decodedString;
			},
		},
	};
</script>

<style>

</style>
