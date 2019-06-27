<template>
	<Layout>
		<!--<template v-slot:sidebar-top>
		</template>
		<template v-slot:sidebar-bottom>
		</template>-->
		<!--<template slot="page-top">-->
		<template v-slot:page-top>
			<pagetop/>
		</template>
		<template v-slot:page-bottom>
			<pagebottom/>
		</template>
	</Layout>
</template>

<script>
import Layout from '../../../../node_modules/@vuepress/theme-default/layouts/Layout.vue';
import pagetop from '../components/section/header.vue';
import pagebottom from '../components/section/footer.vue';
export default {
	components: {Layout, pagetop, pagebottom}
};
</script>
