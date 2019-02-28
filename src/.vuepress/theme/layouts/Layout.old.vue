<template>
  <Layout>
    <!--<template v-slot:sidebar-top>
		</template>
		<template v-slot:sidebar-bottom>
    </template>-->
    <!--<template slot="page-top">-->
    <template v-slot:page-top>
      <pagetop v-if="header"/>
    </template>
    <template v-slot:page-bottom>
      <pagebottom/>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout.vue';
import pagetop from '../../components/template/section/header.vue';
import pagebottom from '../../components/template/section/footer.vue';
export default {
  components: {Layout, pagetop, pagebottom},
  computed: {
    header() {
      return this.$page.path.startsWith('/blog/');
    }
  }
};
</script>
