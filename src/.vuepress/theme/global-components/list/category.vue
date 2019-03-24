<template>
	<section>
		<template v-if="category">
			<h1>
				<router-link to="/blog/category/">Category</router-link>
				"{{category}}"
			</h1>
			<posts :posts="posts" :categories="false"/>
		</template>
		<template v-else>
			<h1>Categories</h1>
			<ul>
				<li v-for="category in categories">
					<h2>
						<router-link :to="{path: '/blog/category/', query: {name: category}}">{{category}}</router-link>
					</h2>
				</li>
			</ul>
		</template>
	</section>
</template>

<script>
import posts from '../..//components/list/posts.vue';
export default {
	components: { posts },
	data() {
		return {
			category: null
		};
	},
	mounted() {
		this.category = this.$route.query.name;
	},
	watch: {
		$route(to) {
			this.category = to.query.name;
		}
	},
	computed: {
		posts() {
			return this.$site.pages.filter(
				post => post.frontmatter.categories && post.frontmatter.categories.includes(this.category) && (post.frontmatter.title || post.frontmatter.date)
			);
		},
		categories() {
			var categories = [];
			this.$site.pages.forEach(function(post) {
				if (post.frontmatter.categories) {
					post.frontmatter.categories.forEach(function(category) {
						if (!categories.includes(category)) {
							categories.push(category);
						}
					});
				}
			});
			return categories.sort();
		}
	}
};
</script>
