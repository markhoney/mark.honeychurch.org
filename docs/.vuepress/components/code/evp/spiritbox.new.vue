<template>
	<form>
		<button type='button' @click="start()">{{status}}</button>
		<h2>Station: <a :href="stations[station].website">{{stations[station].name}}</a></h2>
		<h2>Number of Stations: {{number}}</h2>
		<input id="number" type="range" min="2" max="16" v-model.number="number" :title="stations.slice(0, number).map((station) => station.name).join('\n')" />
		<h2>Switches per minute: {{rate}}</h2>
		<input id="rate" type="range" min="10" max="60" v-model.number="rate" :title="(60 / rate).toFixed(2) + ' seconds per station'" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				number: 6,
				rate: 30,
				station: 0,
				source: null,
				//stations: [{name: '', url: ''}],
				stations: this.shuffle(require('./stations.json')),
				source: null,
				audio: null,
				buffer: null,
				//streams: {},
				status: 'Play'
			};
		},
		computed: {
			streams() {
				for (const station = 0; station < this.number; station++) {
					do {
						stations[station].stream = getStream(stations[station].url);
					} while (!stations[station].stream);
				}
				return this.stations.slice(0, this.number);
			},
			source() {
				this.$audioCtx = new AudioContext();
				const source = this.$audioCtx.createBufferSource();
				// this.$audio = new Audio();
				// const source = this.$audioCtx.createMediaElementSource(this.$audio);
				// this.$audio.play();
				source.connect(this.$audioCtx.destination);
				return source;
			},
		},
		methods: {
			shuffle(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
				}
			},
			getStream: function(url) {
				const request = new XMLHttpRequest();
				try {
					request.open('GET', url, false);
					request.responseType = 'arraybuffer';
					request.onload = function() {
						this.$audioCtx.decodeAudioData(request.response, function(buffer) {
							this.source.buffer = buffer;
						}, (error) => {});
					}
					request.send();
					return request;
				} catch (e) {
					return null;
				}
			},
			getAudio() {
				const audioCtx = new AudioContext();
				const source = audioCtx.createBufferSource();
				// const audio = new Audio();
				// const source = audioCtx.createMediaElementSource(audio);
				// audio.play();
				source.connect(audioCtx.destination);
				return source;
			},
			startStream: function(id) {
				if (!this.stations[id].stream) {
					const request = new XMLHttpRequest();
					request.open('GET', this.stations[id].url, true);
					request.responseType = 'arraybuffer';
					request.onerror = function() {
						delete this.stations[id];
					};
					request.onload = function() {
						this.stations[id].stream = request.response;
						this.audioCtx.decodeAudioData(request.response, function(buffer) {
							this.source.buffer = buffer;
						}, console.log("Oops"));
					}
					request.send();
				} else {
					this.audioCtx.decodeAudioData(this.urls[id], function(buffer) {
						this.source.buffer = buffer;
					}, console.log("Oops"));
				}
			},
			playStream: function(id) {
				this.audioCtx.decodeAudioData(this.urls[id], function(buffer) {
					this.source.buffer = buffer;
				}, console.log("Oops"));
			},
			pauseStream: function(id) {
				//this.urls[id].onload = null;
			},
			getStreamAsync: function(id) {
				const source = this.audioCtx.createBufferSource();
				const request = new XMLHttpRequest();
				//request.responseType = 'arraybuffer';
				request.open('GET', this.stations[this.station].url, false);
				request.send();
				source.buffer = this.audioCtx.createBuffer(request.response, false);
				//source.start(0);
				//source.noteOn(0);
				return source;
			},
			getStream: function(id) {
				const source = this.audioCtx.createBufferSource();
				const request = new XMLHttpRequest();
				request.open('GET', this.stations[this.station].url, true);
				request.responseType = 'arraybuffer';
				request.onload = function() {
					this.audioCtx.decodeAudioData(request.response, function(buffer) {
						source.buffer = buffer;
					}, console.log("Oops"));
				}
				request.send();
				return source;
			},
			startProper: function() {
				if (this.status == 'Play') {
					if (!this.audioCtx) {
						this.audioCtx = new AudioContext();
						this.source = this.audioCtx.createBufferSource();
						//this.audio = new Audio();
						//this.source = this.audioCtx.createMediaElementSource(this.audio);
						//this.audio.play();
						this.source.connect(this.audioCtx.destination);
						this.source.start(0);
						//this.source.noteOn(0);
					}
					this.status = "Pause";
					this.loop();
				} else {
					this.status = "Play";
				}
			},
			start: function() {
				this.audioCtx = new AudioContext();
				this.source = this.audioCtx.createBufferSource();
				this.audio = new Audio();
				this.source = this.audioCtx.createMediaElementSource(this.audio);
				const request = new XMLHttpRequest();
				request.open('GET', this.stations[2].url, true);
				request.responseType = 'arraybuffer';
				request.onload = function() {
					this.audioCtx.decodeAudioData(request.response, function(buffer) {
						this.source.buffer = buffer;
					}, console.log("Oops"));
				}
				request.send();
				this.audio.play();
				this.source.connect(this.audioCtx.destination);
				//this.source.start(0);
				//this.source.noteOn(0);
				this.status = "Pause";
			},
			loop: function() {
				setTimeout(() => {
					this.station = Math.floor(Math.random() * this.number);
					if (this.status == 'Pause') this.loop();
				}, 10000 / this.rate);
			}
		},
		watch: {
			station: function(id, old) {
				this.startStream(id);
				//this.pauseStream(old);
				//this.playStream(id);
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
