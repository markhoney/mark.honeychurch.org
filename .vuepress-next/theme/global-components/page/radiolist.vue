<template>
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Station</td>
				<td>Host</td>
				<td>Topics</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="segment in segments" :key="segment.date">
				<td><router-link :to="'/blog/skepticism/' + segment.date.slice(0, 10).split('-').join('/') + '/'">{{segment.date.slice(0, 10)}}</router-link></td>
				<td>{{segment.outlet}}</td>
				<td v-if="segment.page"><a :href="segment.page" target="_blank" rel="noopener noreferrer">{{segment.host}}</a></td>
				<td v-else>{{segment.host}}</td>
				<td>{{segment.title}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	// import radio from '@theme/global-components/page/radio.json';
	export default {
		/* data() {
			return {
				radio,
			};
		}, */
		computed: {
			pages() {
				return this.$site.pages.filter(page => (page.path.startsWith('/blog/skepticism/') && page.frontmatter.date && page.frontmatter.host && page.title && page.title !== "Skeptical Thoughts")).map((page) => page.frontmatter);
			},
			segments() {
				if (!this.pages || !this.pages.length) return [];
				const dates = [...new Set(this.pages.map((page) => page.date))].sort((a, b) => b.localeCompare(a));
				return dates.map((date) => {
					const pages = this.pages.filter((page) => page.date === date);
					return {
						...pages[0],
						title: pages.map((page) => page.title).join(', '),
					};
				});
			},
		},
	};
</script>
