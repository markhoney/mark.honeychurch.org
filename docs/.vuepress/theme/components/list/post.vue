<template>
	<li>
		<h2>
			<router-link :to="post.path">{{post.title}}</router-link>
		</h2>
		<taxonomy
			v-if="taxonomy"
			:post="post"
			:sections="sections"
			:categories="categories"
			:tags="tags"
		/>
		<div v-if="excerpt && post.excerpt">
			<client-only>
				<span v-html="post.excerpt"/>
			</client-only>
			<router-link :to="post.path">Continue Reading...</router-link>
		</div>
	</li>
</template>

<script>
import Taxonomy from '@theme/components/post/taxonomy.vue';
export default {
	components: {Taxonomy},
	props: {
		post: {
			type: Object
		},
		dates: {
			type: Boolean,
			default: false
		},
		excerpt: {
			type: Boolean,
			default: true
		},
		taxonomy: {
			type: Boolean,
			default: true
		},
		sections: {
			type: Boolean,
			default: false
		},
		categories: {
			type: Boolean,
			default: true
		},
		tags: {
			type: Boolean,
			default: true
		}
	}
};
</script>
