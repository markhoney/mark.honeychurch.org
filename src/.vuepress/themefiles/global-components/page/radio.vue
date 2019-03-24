<template>
	<div>
		<h2>
			<template v-if="segments.day">
				<router-link
					:to="'/blog/skepticism/' + segments.year + '/' + segments.month + '/' + segments.day + '/'"
				>{{getOrdinalNum(segments.day)}}</router-link>
			</template>
			<template v-if="segments.month">
				<router-link
					:to="'/blog/skepticism/' + segments.year + '/' + segments.month + '/'"
				>{{getMonthName(segments.month)}}</router-link>
			</template>
			<router-link :to="'/blog/skepticism/' + segments.year + '/'">{{segments.year}}</router-link>
		</h2>
		<p>
			Here are the topics I chose to talk about on RadioLive for the {{segments.period}}. Some of them may not have been mentioned
			<a
				v-if="segments.period == 'week' && segments.audio.length > 0"
				:href="segments.audio[0].url"
			>on the radio</a>
			<template v-else>on the radio</template>&nbsp;due to a lack of time.
		</p>
		<audio
			v-if="segments.audio.length > 0"
			v-for="audio in segments.audio"
			controls
			:src="audio.audio"
		/>
		<posts :dates="segments.show" :date="segments.show"/>
	</div>
</template>

<script>
//import months from "./months.json";
import radio from './radio.json';
import posts from '../list/section.vue';
export default {
	components: { posts },
	data() {
		return {
			radio: radio
			//months: months
		};
	},
	computed: {
		segments: function() {
			var components = this.$page.path.split('/');
			var segments = { show: true };
			if (components.length >= 5) {
				segments.period = 'year';
				segments.date = components[3];
				segments.year = components[3];
			}
			if (components.length >= 6) {
				segments.period = 'month';
				segments.date += '-' + components[4];
				segments.month = components[4];
			}
			if (components.length >= 7) {
				segments.period = 'week';
				segments.date += '-' + components[5];
				segments.day = ('0' + components[5]).slice(-2);
				segments.show = false;
			}
			segments.audio = this.radio.filter(
				segment =>
					//segment.date.startsWith(segments.date)
					segment.date == segments.date
			);
			return segments;
		}
	},
	methods: {
		getOrdinalNum: function(n) {
			return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
		},
		getMonthName: function(n) {
			return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n - 1];
		}
	}
};
</script>

<style scoped>
audio {
	text-align: center;
	margin: 2em;
}
</style>
