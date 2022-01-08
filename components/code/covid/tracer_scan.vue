<template>
	<div>
		<client-only>
			<qrcode-stream @decode="onDecode" />
		</client-only>
		<div>{{data}}</div>
	</div>
</template>

<script>
	import {QrcodeStream} from 'vue-qrcode-reader';
	export default {
		components: {
			QrcodeStream,
		},
		data() {
			return {
				data: null,
			};
		},
		methods: {
			onDecode(decodedString) {
				this.data = decodedString;
			},
		},
	};
</script>
