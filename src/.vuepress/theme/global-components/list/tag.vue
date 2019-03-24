<template>
	<section>
		<template v-if="tag">
			<h1>
				<router-link to="/blog/tag/">Tag</router-link>
				"{{tag}}"
			</h1>
			<posts :posts="posts" :tags="false"/>
		</template>
		<template v-else>
			<h1>Tags</h1>
			<ul>
				<li v-for="tag in tags">
					<h2>
						<router-link :to="{path: '/blog/tag/', query: {name: tag}}">{{tag}}</router-link>
					</h2>
				</li>
			</ul>
		</template>
	</section>
</template>

<script>
import posts from '../../../themefiles/components/list/posts.vue';
export default {
	components: { posts },
	data() {
		return {
			tag: null
		};
	},
	mounted() {
		this.tag = this.$route.query.name;
	},
	watch: {
		$route(to) {
			this.tag = to.query.name;
		}
	},
	computed: {
		posts() {
			return this.$site.pages.filter(
				post => post.frontmatter.tags && post.frontmatter.tags.includes(this.tag) && (post.frontmatter.title || post.frontmatter.date)
			);
		},
		tags() {
			var tags = [];
			this.$site.pages.forEach(function(post) {
				if (post.frontmatter.tags) {
					post.frontmatter.tags.forEach(function(tag) {
						if (!tags.includes(tag)) {
							tags.push(tag);
						}
					});
				}
			});
			return tags.sort();
		}
	}
};
</script>
