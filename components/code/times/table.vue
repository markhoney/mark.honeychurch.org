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
				<template v-for="time in times">
					<tr v-if="time && 'time' in time" :key="time.time">
						<td>{{time.time}}</td>
						<td>{{time.vertical || ''}}</td>
						<td>{{time.horizontal || ''}}</td>
						<td>{{time.rotated || ''}}</td>
						<td>{{time.reversed || ''}}</td>
					</tr>
				</template>
			</tbody>
		</table>
	</section>
</template>

<script>
	import times from "./times.js";
	export default {
		props: ["clock"],
		computed: {
			times() {
				return times(this.clock, 'js');
			}
		}
	}
</script>
