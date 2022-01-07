<template>
	<section>
		<ul>
			<template v-for="postdate in postdates">
				<li v-if="dates" :key="postdate" class="date">
					<h2>
						<router-link
							:to="'/blog/skepticism/' + new Date(postdate).toISOString().slice(0, 10).split('-').join('/') + '/'"
						>{{new Date(postdate).toLocaleDateString("en-NZ", {year: 'numeric', month: 'long', day: 'numeric'})}}</router-link>
					</h2>
				</li>
				<li v-for="post in posts.filter((post) => post.frontmatter.date === postdate)" :key="post.path">
					<h3>
						<router-link :to="post.path">{{post.title}}</router-link>
					</h3>
					<template v-if="excerpt && post.excerpt">
						<client-only>
							<span v-html="post.excerpt"/>
						</client-only>
						<em v-if="post.readingTime">{{post.readingTime.text}}, {{post.readingTime.words}} words.</em>
						<router-link :to="post.path">Continue Reading...</router-link>
					</template>
					<taxonomy
						v-if="taxonomy"
						:post="post"
						:sections="sections"
						:categories="categories"
						:tags="tags"
					/>
				</li>
				<!--<post v-for="post in posts" v-if="post.frontmatter.date == postdate" :key="post.path" :post="post" :excerpt="excerpt" :taxonomy="taxonomy" :sections="sections" :categories="categories" :tags="tags" />-->
			</template>
		</ul>
	</section>
</template>

<script>
import Taxonomy from '@theme/components/post/taxonomy.vue';
//import post from './post.vue';
export default {
	components: {Taxonomy}, // , post
	props: {
		posts: {
			type: Array
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
	},
	computed: {
		postdates() {
			return this.posts.map(post => post.frontmatter.date).filter((date, index, self) => date && self.indexOf(date) === index);
		}
	}
};
</script>

<style scoped>
	li {
		list-style-type: square;
	}
	li.date {
		list-style-type: none;
		text-align: center;
		margin-top: 4em;
	}
</style>
