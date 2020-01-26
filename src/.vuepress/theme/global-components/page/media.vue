<template>
	<table>
		<thead>
			<tr><td>Date</td><td>Publication</td><td>Article</td></tr>
		</thead>
		<tbody>
			<tr v-for="article in media">
				<td>{{article.date}}</td>
				<td>{{article.publication}}</td>
				<td><a :href="article.url" target="_blank" rel="noopener noreferrer">{{article.title}}</a></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import media from "@theme/global-components/page/media.json";
	export default {
		data() {
			return {
				media: media
			};
		}
	};
</script>
