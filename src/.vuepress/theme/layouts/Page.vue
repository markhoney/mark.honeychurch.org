<template>
	<Layout>
		<template v-slot:page-bottom>
			<pagebottom/>
		</template>
	</Layout>
</template>

<script>
//import Layout from './Layout.vue';
import Layout from '../../../../node_modules/@vuepress/theme-default/layouts/Layout.vue';
import pagebottom from '../components/section/footer.vue';
export default {
	components: {Layout, pagebottom}
};
</script>
