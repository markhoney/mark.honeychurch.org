<template>
	<div class="cube" @click="roll">
		<div :class="side">
			<figure class="face01">1</figure>
			<figure class="face02">2</figure>
			<figure class="face03">3</figure>
			<figure class="face04">4</figure>
			<figure class="face05">5</figure>
			<figure class="face06">6</figure>
			<figure class="face07">7</figure>
			<figure class="face08">8</figure>
			<figure class="face09">9</figure>
			<figure class="face10">10</figure>
			<figure class="face11">11</figure>
			<figure class="face12">12</figure>
			<figure class="face13">13</figure>
			<figure class="face14">14</figure>
			<figure class="face15">15</figure>
			<figure class="face16">16</figure>
			<figure class="face17">17</figure>
			<figure class="face18">18</figure>
			<figure class="face19">19</figure>
			<figure class="face20">20</figure>
		</div>
	</div>
</template>

<script>
	const axios = require("axios");
	export default {
		data() {
			return {
				side: "show-1"
			};
		},
		methods: {
			roll: async function () {
				//this.side = "show-" + (Math.floor((await axios.get("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=1")).data.data[0] / (256 / 20)) + 1);
				this.side = "show-" + (Math.floor((await axios.get("https://www.random.org/cgi-bin/randbyte?nbytes=1&format=d")).data / (256 / 20)) + 1);
			}
		}
	};
</script>

<style scoped>
	.cube {
		width: 190px;
		height: 190px;
		position: relative;
		margin: 0 auto;
		margin-bottom: 150px;
		perspective: 1000;
	}

	.cube div {
		width: 140%;
		height: 150%;
		position: absolute;
		transform-style: preserve-3d;
		transform:	translateZ( -60px ) rotateY( 0deg ) rotateX( 0deg ) rotateZ( 0deg );
		transition: transform 1s ease-in-out;
	}

	.cube div figure {
		width: 189px;
		height: 188px;
		display: block;
		position: absolute;
		background: url('/media/images/blog/random/flip/blue.png') top center no-repeat;
		font-size: 70px;
		line-height: 190px;
		font-family: sans-serif;
		text-align: center;
		text-shadow: #000 -1px -1px 0, #fff 1px 1px 0;
		color: #f1f1f1;
		backface-visibility: hidden;
	}

	.cube div .face01	{transform: rotateY(	36deg ) rotateX(	53deg ) rotateZ(	 0deg ) translateZ( 120px );}
	.cube div .face06	{transform: rotateY( 108deg ) rotateX(	53deg ) rotateZ( 240deg ) translateZ( 120px );}
	.cube div .face08	{transform: rotateY( 180deg ) rotateX(	53deg ) rotateZ( 240deg ) translateZ( 120px );}
	.cube div .face04	{transform: rotateY( 253deg ) rotateX(	53deg ) rotateZ( 120deg ) translateZ( 120px );}
	.cube div .face10	{transform: rotateY( 324deg ) rotateX(	53deg ) rotateZ(	 0deg ) translateZ( 120px );}
	.cube div .face18	{transform: rotateY(	 0deg ) rotateX( -53deg ) rotateZ(	60deg ) translateZ( 120px );}
	.cube div .face16	{transform: rotateY(	72deg ) rotateX( -53deg ) rotateZ(	60deg ) translateZ( 120px );}
	.cube div .face11	{transform: rotateY( 144deg ) rotateX( -53deg ) rotateZ( 180deg ) translateZ( 120px );}
	.cube div .face20	{transform: rotateY( 216deg ) rotateX( -53deg ) rotateZ( 180deg ) translateZ( 120px );}
	.cube div .face14	{transform: rotateY( 288deg ) rotateX( -53deg ) rotateZ(	60deg ) translateZ( 120px );}
	.cube div .face13	{transform: rotateY(	36deg ) rotateX(	11deg ) rotateZ( 180deg ) translateZ( 120px );}
	.cube div .face09	{transform: rotateY( 108deg ) rotateX(	11deg ) rotateZ( 180deg ) translateZ( 120px );}
	.cube div .face02	{transform: rotateY( 180deg ) rotateX(	11deg ) rotateZ( 300deg ) translateZ( 120px );}
	.cube div .face05	{transform: rotateY( 253deg ) rotateX(	11deg ) rotateZ( 300deg ) translateZ( 120px );}
	.cube div .face17	{transform: rotateY( 324deg ) rotateX(	11deg ) rotateZ( 180deg ) translateZ( 120px );}
	.cube div .face12	{transform: rotateY(	 0deg ) rotateX( -11deg ) rotateZ( 120deg ) translateZ( 120px );}
	.cube div .face19	{transform: rotateY(	72deg ) rotateX( -11deg ) rotateZ(	 0deg ) translateZ( 120px );}
	.cube div .face03	{transform: rotateY( 144deg ) rotateX( -11deg ) rotateZ(	 0deg ) translateZ( 120px );}
	.cube div .face07	{transform: rotateY( 216deg ) rotateX( -11deg ) rotateZ(	 0deg ) translateZ( 120px );}
	.cube div .face15	{transform: rotateY( 288deg ) rotateX( -11deg ) rotateZ( 120deg ) translateZ( 120px );}

	.cube div.show-1	 {transform: translateZ( -60px ) rotateY(	-50deg ) rotateX(	-38deg ) rotateZ(	 35deg );}
	.cube div.show-2	 {transform: translateZ( -60px ) rotateY(	170deg ) rotateX(		5deg ) rotateZ(	-60deg );}
	.cube div.show-3	 {transform: translateZ( -60px ) rotateY( -144deg ) rotateX(	 -8deg ) rotateZ(	 -6deg );}
	.cube div.show-4	 {transform: translateZ( -60px ) rotateY(	 76deg ) rotateX(	135deg ) rotateZ(	-62deg );}
	.cube div.show-5	 {transform: translateZ( -60px ) rotateY(	118deg ) rotateX(	-53deg ) rotateZ(	-35deg );}
	.cube div.show-6	 {transform: translateZ( -60px ) rotateY(	-75deg ) rotateX(	135deg ) rotateZ(	 65deg );}
	.cube div.show-7	 {transform: translateZ( -60px ) rotateY(	-37deg ) rotateX(	187deg ) rotateZ(	185deg );}
	.cube div.show-8	 {transform: translateZ( -60px ) rotateY(	-50deg ) rotateX( -153deg ) rotateZ(	 75deg );}
	.cube div.show-9	 {transform: translateZ( -60px ) rotateY(	-73deg ) rotateX( -175deg ) rotateZ(	 15deg );}
	.cube div.show-10	{transform: translateZ( -60px ) rotateY(	 51deg ) rotateX(	-42deg ) rotateZ(	-41deg );}
	.cube div.show-11	{transform: translateZ( -60px ) rotateY(	-50deg ) rotateX( -220deg ) rotateZ(	-37deg );}
	.cube div.show-12	{transform: translateZ( -60px ) rotateY(	-10deg ) rotateX(	 -4deg ) rotateZ( -120deg );}
	.cube div.show-13	{transform: translateZ( -60px ) rotateY(	 35deg ) rotateX(		4deg ) rotateZ( -177deg );}
	.cube div.show-14	{transform: translateZ( -60px ) rotateY( -296deg ) rotateX(	 72deg ) rotateZ(	 30deg );}
	.cube div.show-15	{transform: translateZ( -60px ) rotateY( -238deg ) rotateX(	129deg ) rotateZ(	 40deg );}
	.cube div.show-16	{transform: translateZ( -60px ) rotateY( -254deg ) rotateX( -136deg ) rotateZ(	113deg );}
	.cube div.show-17	{transform: translateZ( -60px ) rotateY(	-37deg ) rotateX(		8deg ) rotateZ(	175deg );}
	.cube div.show-18	{transform: translateZ( -60px ) rotateY(	-50deg ) rotateX(	 25deg ) rotateZ(	288deg );}
	.cube div.show-19	{transform: translateZ( -60px ) rotateY(	-72deg ) rotateX(		4deg ) rotateZ(	352deg );}
	.cube div.show-20	{transform: translateZ( -60px ) rotateY(	 50deg ) rotateX( -220deg ) rotateZ(	 38deg );}

/*
	.cube:after {
		content: "";
		display: block;
		position: relative;
		width: 380px;
		height: 380px;
		top: 70px;
		margin-left: -96px;
		background: radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 50%);
		transform: scaleY(0.3);
	}
*/
</style>
