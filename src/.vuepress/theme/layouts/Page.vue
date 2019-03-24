<template>
	<Layout>
		<template v-slot:page-bottom>
			<pagebottom/>
		</template>
	</Layout>
</template>

<script>
import Layout from './Layout.vue';
import pagebottom from '../../themefiles/components/section/footer.vue';
export default {
	components: { Layout, pagebottom }
};
</script>
