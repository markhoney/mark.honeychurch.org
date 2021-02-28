<template>
	<posts :posts="posts" :dates="true"/>
</template>

<script>
import Posts from '@theme/components/list/posts.vue';
export default {
	components: {Posts},
	data() {
		return {};
	},
	components: {Posts},
	computed: {
		posts() {
			return this.$site.pages
				.filter(post => post.frontmatter.title && post.frontmatter.date)
				.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
				.slice(0, 16);
		}
	}
};
</script>
