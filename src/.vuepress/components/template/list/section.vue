<template>
  <section>
    <ul v-if="$page.path == '/blog/'">
      <li v-for="section in $site.themeConfig.nav.filter(x => x.text == 'Blog')[0].items">
        <h2>
          <router-link :to="section.link">{{section.text}}</router-link>
        </h2>
        <p>{{section.description}}</p>
        <ul v-if="section.items">
          <li v-for="item in section.items">
            <h2>
              <router-link :to="item.link">{{item.text}}</router-link>
            </h2>
            <p>{{item.description}}</p>
          </li>
        </ul>
      </li>
    </ul>
    <template v-else>
      <hr>
      <em>Show</em>
      <input type="checkbox" id="excerpt" v-model="showexcerpt">
      <label for="excerpt">Excerpt</label>
      <input type="checkbox" id="taxonomy" v-model="showtaxonomy">
      <label for="taxonomy">Categories</label>
      <input type="checkbox" id="dates" v-model="showdates" v-if="date">
      <label for="dates" v-if="date">Date</label>
      <hr>
      <posts :posts="posts" :excerpt="showexcerpt" :taxonomy="showtaxonomy" :dates="showdates"/>
    </template>
  </section>
</template>

<script>
//import sections from "./sections.json";
import posts from './posts.vue';
export default {
  components: { posts },
  props: {
    date: {
      type: Boolean,
      default: false
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
    }
  },
  data() {
    return {
      showexcerpt: this.excerpt,
      showtaxonomy: this.taxonomy,
      showdates: this.dates
      //sections: sections
    };
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(post => post.path.startsWith(this.$page.path) && post.frontmatter.title)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  }
};
</script>

<style scoped>
input {
  width: auto;
}
</style>
