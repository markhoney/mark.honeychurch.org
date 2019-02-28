<template>
</template>

<script>
	export default {
	props: ["image"],
		data() {
			return {
				domain: "https://mark.honeychurch.org" // this.$site.sitemap.domain
			}
		},
		metaInfo () {
			return {
				meta: [
					{property: 'og:locale', content: 'en_NZ'},
					{property: 'og:type', content: 'website'},
					{name: 'twitter:card', content: 'summary'},
					{name: 'twitter:creator', content: '@markhoney'},
					{name: 'author', content: 'Mark Honeychurch'},
					{property: 'og:site_name', content: this.$site.title},
					{property: 'og:title', content: this.$page.title},
					{property: 'og:url', content: this.domain + this.$page.path},
					{property: 'og:image', content: this.domain + this.image},
					{property: 'og:description', content: (this.$page.excerpt ? this.$page.excerpt.replace(/<(?:.|\n)*?>/gm, '').trim() : this.$description)},
					{name: 'description', content: (this.$page.excerpt ? this.$page.excerpt.replace(/<(?:.|\n)*?>/gm, '').trim() : this.$description)},
					{name: 'keywords', content: (this.$page.frontmatter.categories ? this.$page.frontmatter.categories.concat(this.$page.frontmatter.tags).join(", ") : "")}
				]
			}
		},
		/*computed: {
			image() {
				var image = '/media/images' + (this.skeptical ? '/' + this.$page.path.split('/')[1] + '/' + this.$page.path.split('/')[2] + '/' + (this.$page.frontmatter.tags ? this.$page.frontmatter.tags[0].toString().toLowerCase() : 'thoughts') : (this.$page.path.endsWith('/') ? this.$page.path.slice(0, -1) : this.$page.path.slice(0, -5))) + '.jpg';
				this.$emit('image', image);
				return image;
			}
		},*/
	/*	head: {
			meta: function () {
				return [
					{property: 'og:locale', content: 'en_NZ'},
					{property: 'og:type', content: 'website'},
					{name: 'twitter:card', content: 'summary'},
					{name: 'twitter:creator', content: '@markhoney'},
					{name: 'author', content: 'Mark Honeychurch'},
					{property: 'og:site_name', content: this.$site.title},
					{property: 'og:title', content: this.$page.title},
					{property: 'og:url', content: this.domain + this.$page.path},
					{property: 'og:image', content: this.domain + this.image},
					{property: 'og:description', content: this.$page.excerpt.replace(/<(?:.|\n)*?>/gm, '').trim()},
					{name: 'description', content: this.$page.excerpt.replace(/<(?:.|\n)*?>/gm, '').trim()},
					{name: 'keywords', content: this.$page.frontmatter.categories.concat(this.$page.frontmatter.tags).join(", ")}
				]
			}
		}*/
	};
</script>
