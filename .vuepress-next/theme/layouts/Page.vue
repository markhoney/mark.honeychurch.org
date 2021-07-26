<template>
	<layout>
		<template #page-bottom>
			<page-bottom />
		</template>
	</layout>
</template>

<script>
	// import ParentLayout from '@parent-theme/layouts/Layout.vue';
	import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
	import PageBottom from '@theme/Footer.vue';
	export default {
		name: 'Page',
		components: {Layout, PageBottom}
	};
</script>
