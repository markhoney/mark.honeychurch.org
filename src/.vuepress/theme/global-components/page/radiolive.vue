<template>
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Host</td>
				<td>Topics</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="segment in radio">
				<td>{{segment.date}}</td>
				<td v-if="segment.url">
					<a :href="segment.url" target="_blank" rel="noopener noreferrer">{{segment.host}}</a>
				</td>
				<td v-else>{{segment.host}}</td>
				<td>
					<!--<router-link :to="'/blog/skepticism/' + segment.date.split('-').join('/') + '/'">-->
					{{$site.pages.filter(post => (post.path.startsWith('/blog/skepticism/' + segment.date.split('-').join('/') + '/') && post.title && post.title != "Skeptical Thoughts")).map(post => post.title).join(", ")}}
					<!--</router-link>-->
					<!--<ul>
						<li v-for="post in $site.pages.filter(post => (post.path.startsWith('/blog/skepticism/' + segment.date.split('-').join('/') + '/') && post.title != 'Skeptical Thoughts with Mark Honeychurch'))">
							<router-link :to="'/blog/skepticism/' + segment.date.split('-').join('/') + '/'">
								{{post.title}}
							</router-link>
						</li>
					</ul>-->
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import radio from '@theme/global-components/page/radio.json';
export default {
	data() {
		return {
			radio: radio
		};
	}
};
</script>
