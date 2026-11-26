<template>
	<form>
		<button @click.prevent="playstop">{{play ? 'Stop' : 'Play'}}</button>
		<select v-model="type">
			<option v-for="option in options" :value="option.value">
				{{option.text}}
			</option>
		</select>
		<input type="range" min="1" max="20000" v-model="tone" />
		<input type="range" min="1" max="100" v-model="volume" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				play: false,
				tone: 440,
				volume: 50,
				options: [
					{text: 'Sine', value: 'sine'},
					{text: 'Square', value: 'square'},
					{text: 'Sawtooth', value: 'sawtooth'},
					{text: 'Triangle', value: 'triangle'},
				],
				type: 'sine',
				context: null,
				oscillator: null,
				gain: null,
			}
		},
		methods: {
			create: function() {
				this.context = new AudioContext();
				this.oscillator = this.context.createOscillator();
				this.gain = this.context.createGain();
				this.oscillator.type = this.type;
				this.oscillator.connect(this.gain);
				this.gain.connect(this.context.destination);
				this.oscillator.start();
			},
			playstop: function() {
				this.play = !this.play;
			}
		},
		watch: {
			play: function(play) {
				if (play) {
					this.create();
				} else {
					this.oscillator.stop();
				}
			},
			tone: function(tone) {
				if (this.oscillator) this.oscillator.frequency.value = tone;
			},
			volume: function(volume) {
				if (this.gain && this.context) this.gain.gain.exponentialRampToValueAtTime(volume / 100, this.context.currentTime + 0.04)
			},
			type: function(type) {
				if (this.oscillator) this.oscillator.type = type;
			}
		},
		beforeUnmount() {
			if (this.oscillator && this.play) this.oscillator.stop();
			if (this.context) this.context.close();
		}
	}
</script>