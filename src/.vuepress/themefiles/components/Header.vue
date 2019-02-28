<template>
  <div>
    <div id="banner">
      <span :style="'background-image: url(' + image + ');'"/>
    </div>
    <h2>{{$page.title}}</h2>
    <h4 v-if="$page.title && $page.frontmatter.date">{{date}}</h4>
    <taxonomy :post="$page"/>
    <!--<metadata :image="image" />-->
  </div>
</template>

<script>
import taxonomy from '../../components/template/post/taxonomy.vue';
//import metadata from "../post/metadata.vue";
export default {
  components: { taxonomy }, //, metadata
  computed: {
    image() {
      var image = this.$page.frontmatter.meta.find(p => p.property == 'og:image').content;
      /*'/media/images' +
        (this.$page.path.startsWith('/blog/skepticism/')
          ? [
              '',
              this.$page.path.split('/')[1],
              this.$page.path.split('/')[2],
              this.$page.frontmatter.tags ? this.$page.frontmatter.tags[0].toString().toLowerCase() : 'thoughts'
            ].join('/')
          : this.$page.path.endsWith('/')
          ? this.$page.path.slice(0, -1)
          : this.$page.path.slice(0, -5)) +
        '.jpg';*/
      //this.$page.frontmatter.image = image;
      return image;
    },
    date() {
      var date = new Date(this.$page.frontmatter.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' });
      this.$page.frontmatter.datestring = date;
      return date;
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2em;
  margin-bottom: 0;
  border: 0;
}
h4 {
  text-align: center;
  margin-bottom: 0;
  border: 0;
}
#banner {
  position: relative;
  height: 35vh;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  /*background-attachment: fixed;*/
  background-position: center;
  background-size: cover;
  background-image: url(/media/images/blog/thinking.jpg);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#banner span {
  display: block;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
}

p {
  text-align: center;
}
</style>
