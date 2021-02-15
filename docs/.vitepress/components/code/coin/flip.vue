<template>
	<div id="coin" :class="side" @click="flip">
		<div class="side-a"></div>
		<div class="side-b"></div>
	</div>
</template>


<script>
	const axios = require("axios");
	export default {
		data() {
			return {
				side: ""
			};
		},
		methods: {
			flip: async function () {
				this.side = "";
				if ((await axios.get("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=1")).data.data[0] % 2) {
					this.side = "heads";
				} else {
					this.side = "tails";
				}
			}
		}
	};
</script>

<style scoped>
	#coin {
		position: relative;
		margin: 1em auto;
		width: 128px;
		height: 128px;
		cursor: pointer;
		transition: -webkit-transform 1s ease-in;
		transform-style: preserve-3d;
	}
	#coin div {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
		position: absolute;
		backface-visibility: hidden;
	}
	.side-a {
		background-color: #990000;
		background: #990000 url(/media/images/blog/random/flip/2017_Gold-Coin-small.png) no-repeat top left;
		z-index: 100;
	}
	.side-b {
		background-color: #009900;
		background: #009900 url(/media/images/blog/random/flip/2017_Gold-Coin_Back-small.png) no-repeat top left;
		transform: rotateX(-180deg);
	}
	#coin.heads {
		animation: flipHeads 3s ease-out forwards;
	}
	#coin.tails {
		animation: flipTails 3s ease-out forwards;
	}

	@keyframes flipHeads {
		from {
			transform: rotateX(0);
		}
		to {
			transform: rotateX(1800deg);
		}
	}
	@keyframes flipTails {
		from {
			transform: rotateX(0);
		}
		to {
			transform: rotateX(1980deg);
		}
	}
</style>
