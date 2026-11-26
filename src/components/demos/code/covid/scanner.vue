<script setup lang="ts">
	import {onUnmounted, ref} from 'vue';

	type Detector = {detect: (source: CanvasImageSource) => Promise<Array<{rawValue: string}>>};
	type DetectorConstructor = new(options: {formats: string[]}) => Detector;

	const video = ref<HTMLVideoElement | null>(null);
	const output = ref('');
	let stream: MediaStream | null = null;
	let frame = 0;

	function stop() {
		cancelAnimationFrame(frame);
		stream?.getTracks().forEach(track => track.stop());
		stream = null;
	}

	async function start() {
		const BarcodeDetector = (window as unknown as {BarcodeDetector?: DetectorConstructor}).BarcodeDetector;
		if (!BarcodeDetector || !video.value) {
			output.value = 'QR scanning is not supported by this browser.';
			return;
		}
		stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}});
		video.value.srcObject = stream;
		const detector = new BarcodeDetector({formats: ['qr_code']});
		const scan = async () => {
			if (!video.value) return;
			const result = await detector.detect(video.value);
			if (result[0]) {
				output.value = result[0].rawValue;
				stop();
				return;
			}
			frame = requestAnimationFrame(scan);
		};
		await scan();
	}

	onUnmounted(stop);
</script>

<template>
	<section class="interactive-widget">
		<h2>QR code scanner</h2>
		<video ref="video" autoplay playsinline />
		<div class="widget-controls">
			<button type="button" @click="start">Start camera</button>
			<button type="button" @click="stop">Stop camera</button>
		</div>
		<output aria-live="polite">{{ output }}</output>
	</section>
</template>
