<template>
	<div>
		<h3>Total Edits: {{edits.length}}</h3>
		<h3>Unique Pages: {{pages.length}}</h3>
		<h2>Page List</h2>
		<ul>
			<li v-for="page in pages">
				<a
					:href="'http://en.wikipedia.org/?curid=' + page.pageid"
					:title="page.comment"
				>{{page.title}}</a>
			</li>
		</ul>
	</div>
</template>


<script>
// https://www.mediawiki.org/wiki/API:Usercontribs
const axios = require('axios');

export default {
	data() {
		return {
			account: 'Markhoney',
			edits: [],
			pages: [],
			total: 0
		};
	},
	async beforeMount() {
		this.edits = (await axios.get(
			'https://en.wikipedia.org/w/api.php?action=query&list=usercontribs&format=json&origin=*&uclimit=500&ucuser=' + this.account
		)).data.query.usercontribs;
		this.pages = Object.values(
			this.edits.reduce((obj, item) => {
				if (!obj[item.title]) obj[item.title] = item;
				return obj;
			}, {})
		).sort((a, b) => a.title.localeCompare(b.title));
	}
};
</script>

<style scoped>
</style>
