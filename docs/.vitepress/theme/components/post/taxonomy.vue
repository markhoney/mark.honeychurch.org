<template>
	<p>
		<template v-if="showsection">
			<em>Section:</em>
			<postsection/>
			<template v-if="(showcategories || showtags)">,</template>
		</template>
		<template v-if="showcategories">
			<em>Categories:</em>
			<categories :categories="post.frontmatter.categories"/>
			<template v-if="showtags">,</template>
		</template>
		<template v-if="showtags">
			<em>Tags:</em>
			<tags :tags="post.frontmatter.tags"/>
		</template>
	</p>
</template>

<script>
import postsection from './section.vue'; // "section" is a reserved HTML tag
import categories from './categories.vue';
import tags from './tags.vue';
export default {
	components: { postsection, categories, tags },
	props: {
		post: {
			type: Object
		},
		sections: {
			type: Boolean,
			default: true
		},
		categories: {
			type: Boolean,
			default: true
		},
		tags: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		showsection: function() {
			if (this.section) return true;
		},
		showcategories: function() {
			if (this.categories && this.post.frontmatter.categories) return true;
		},
		showtags: function() {
			if (this.tags && this.post.frontmatter.tags) return true;
		}
	}
};
</script>
