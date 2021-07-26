<template>
	<section>
		<h3>{{clock}} Hour Clock</h3>
		<table>
			<thead>
				<tr>
					<td>Time</td>
					<td>Vertical</td>
					<td>Horizontal</td>
					<td>Rotated</td>
					<td>Reversed</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="time in times" v-if="time && 'time' in time">
					<td>{{time.time}}</td>
					<td>{{time.vertical || ''}}</td>
					<td>{{time.horizontal || ''}}</td>
					<td>{{time.rotated || ''}}</td>
					<td>{{time.reversed || ''}}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
	const times = require("./times");
	export default {
		props: ["clock"],
		computed: {
			times() {
				return times(this.clock, 'js');
			}
		}
	}
</script>
