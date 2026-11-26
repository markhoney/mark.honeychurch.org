<template>
	<video autoplay="true" ref="webcam" />
</template>

<script>
	export default {
		async mounted() {
			if (navigator.mediaDevices.getUserMedia) {
				const stream = await navigator.mediaDevices.getUserMedia({video: true});
				if (stream) this.$refs["webcam"].srcObject = stream;
			}
		}
	};
</script>
