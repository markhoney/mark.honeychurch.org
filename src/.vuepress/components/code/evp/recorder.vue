<template>
	<form>
		<button type='button' v-on:click="start">{{status}}</button>
		<h2>Volume: {{volume}}</h2>
		<input id="slider" type="range" min="-1" max="10" v-model.number="power" :title="volume" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				power: -1,
				filter: null,
				destination: null,
				status: 'Play'
			};
		},
		computed: {
			gain() {
				return Math.pow(10, this.power - 1);
			},
			volume() {
				return (this.gain * 100).toLocaleString() + ' %';
			}
		},
		methods: {
			start: function() {
				if (this.status == 'Play') {
					if (!this.destination) {
						if (navigator.getUserMedia) {
							navigator.getUserMedia(
								{audio: true},
								(stream) => {
									const audioCtx = new AudioContext();
									const source = audioCtx.createMediaStreamSource(stream);
									this.filter = audioCtx.createGain();
									this.filter.gain.value = this.gain;
									this.destination = audioCtx.destination;
									source.connect(this.filter);
									this.filter.connect(this.destination);
									this.status = "Pause";
								},
								function() {
									console.log("Error");
								}
							);
						}
					} else {
						this.filter.connect(this.destination);
						this.status = "Pause";
					}
				} else {
					this.filter.disconnect(this.destination);
					this.status = "Play";
				}
			}
		},
		watch: {
			gain: function(val, old) {
				if (this.filter) this.filter.gain.value = val;
			}
		}
	};
</script>

<style scoped>
	#slider {
		width: 80%;
		margin-right: 1em;
		margin-bottom: 2em;
	}
</style>
