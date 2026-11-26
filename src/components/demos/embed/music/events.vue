<template>
<div>
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Band</td>
				<td>Event</td>
				<td>Location</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="event in events">
				<td>{{event.date}}</td>
				<td>
					<a v-if="event.website" :href="event.website" target="_blank" rel="noopener noreferrer">{{event.name}}</a>
					<template v-else>{{event.name}}</template>
				</td>
				<td>
					<a v-if="event.eventurl" :href="event.eventurl" target="_blank" rel="noopener noreferrer">{{event.event}}</a>
					<template v-else>{{event.event}}</template>
				</td>
				<td>{{[event.venue, event.location, event.country].filter(Boolean).join(', ')}}</td>
			</tr>
		</tbody>
	</table>
</div>
</template>


<script>
import events from "./events.json";

export default {
	data() {
		return {
			events: events
		};
	},
}
</script>
