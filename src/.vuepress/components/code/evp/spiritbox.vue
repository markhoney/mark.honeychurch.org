<template>
	<form>
		<button type='button' v-on:click="start">{{status}}</button>
		<h2>Station: <a :href="stations[station].website">{{stations[station].name}}</a></h2>
		<h2>Number of Stations: {{number}}</h2>
		<input id="number" type="range" min="2" max="16" v-model.number="number" :title="stations" />
		<h2>Switches per second: {{rate}}</h2>
		<input id="rate" type="range" min="1" max="10" v-model.number="rate" :title="rate" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				number: 6,
				rate: 2,
				station: 0,
				source: null,
				//stations: [{name: '', url: ''}],
				stations: require('./stations.json'),
				audioCtx: null,
				source: null,
				audio: null,
				buffer: null,
				//streams: {},
				status: 'Play'
			};
		},
		mounted() {
			//this.stations = require('./stations.json');
		},
		methods: {
			openSource: function() {
				this.audio.src = this.stations[this.station].url;
				//this.audio.play();
			},
			openStreamAsync: function() {
				const request = new XMLHttpRequest();
				//request.responseType = 'arraybuffer';
				request.open('GET', this.stations[this.station].url, false);
				request.send();
				this.source.buffer = this.audioCtx.createBuffer(request.response, false);
				this.source.start(0);
				//this.source.noteOn(0);
			},
			openStream: function() {
				const request = new XMLHttpRequest();
				request.open('GET', this.stations[this.station].url, true);
				request.responseType = 'arraybuffer';
				request.onload = function() {
					this.audioCtx.decodeAudioData(request.response, function(buffer) {
						this.source.buffer = buffer;
					}, onError);
				}
				request.send();
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
