<template>
  <posts :posts="posts" :dates="true"/>
</template>

<script>
import posts from './posts.vue';
export default {
  data() {
    return {};
  },
  components: { posts },
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
