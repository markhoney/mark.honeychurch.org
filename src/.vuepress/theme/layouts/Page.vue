<template>
  <Layout>
    <template v-slot:page-bottom>
      <pagebottom/>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout.vue';
import pagebottom from '../../components/template/section/footer.vue';
export default {
  components: { Layout, pagebottom }
};
</script>
