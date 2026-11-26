<template>
	<form>
		<h3>VOLTAGE DIVIDER</h3>
		<h4>Enter the voltage divider gain ( &gt; 0 to &lt; 1 )</h4>
		<label for="gain">Required gain = </label>
		<input id="gain" v-model="gain" maxlength="8" /><br />
		<p>Actual Gain = {{result.gain.toFixed(6)}}</p>
		<p>R1 = {{result.r1.toFixed(1)}} kohm</p>
		<p>R2 = {{result.r2.toFixed(1)}} kohm</p>
		<p>R3 = {{result.r3.toFixed(1)}} kohm</p>
		<p>R4 = {{result.r4.toFixed(1)}} kohm</p>
		<p>P1 = {{result.p1.toFixed(4)}} kohm</p>
		<p>P2 = {{result.p2.toFixed(4)}} kohm</p>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				gain: 0.5,
				resistors: [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2, 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 1000000000],
				result: {gain: 10, r1: 0, r2: 0, r3: 0, r4: 0, p1: 0, p2: 0}
				
			};
		},
		watch: {
			gain: {
				immediate: true,
				handler(num) {
					var required = Number.parseFloat(num);
					if (!isNaN(required) && required > 0 && required < 1) {
						var p1, p2, gain;
						for (var r1 = 0; r1 < this.resistors.length - 1; r1++) {
							for (var r2 = r1; r2 < this.resistors.length; r2++) {
								for (var r3 = 0; r3 < this.resistors.length - 1; r3++) {
									for (var r4 = r3; r4 < this.resistors.length; r4++) {
										p1 = (this.resistors[r1] * this.resistors[r2]) / (this.resistors[r1] + this.resistors[r2]);
										p2 = (this.resistors[r3] * this.resistors[r4]) / (this.resistors[r3] + this.resistors[r4]);
										gain = p2 / (p1 + p2);
										if (Math.abs(required - gain) < Math.abs(required - this.result.gain) || (Math.abs(required - gain) == Math.abs(required - this.result.gain)) && p1 + p2 > this.result.p1 + this.result.p2) {
											this.result = {gain: gain, r1: this.resistors[r1], r2: this.resistors[r2], r3: this.resistors[r3], r4: this.resistors[r4], p1: p1, p2: p2};
										}
									}
								}
							}
						}
					} else {
						this.result = {gain: 9.999999, r1: 0, r2: 0, r3: 0, r4: 0, p1: 0, p2: 0};
					}
				}
			}
		}
	}
</script>
