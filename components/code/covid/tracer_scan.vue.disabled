<template>
	<div>
		<client-only>
			<qrcode-stream @decode="onDecode"></qrcode-stream>
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
				raw: null,
				error: null,
			};
		},
		methods: {
			onDecode(decodedString) {
				this.raw = decodedString;
			},
		},
		computed: {
			decoded() {
				const prefix = 'NZCOVIDTRACER:';
				if (!this.raw.startsWith(prefix)) {
					this.error = 'Not an NZ COVID Tracer QR code';
					return null;
				}
				const encoded = this.raw.replace(prefix, '');
				try {
					const decoded = atob(encoded);
				} catch (e) {
					this.error = 'Not valid Base64 encoded data';
					return null;
				}
				const parsed = JSON.parse(decoded);
				if (!parsed) {
					this.error = 'Not a valid JSON object';
					return null;
				}
				return parsed;
			},
		},
	};
</script>
