<template>
	<layout>
		<template #page-bottom>
			<page-bottom />
		</template>
	</layout>
</template>

<script>
	import Layout from '@parent-theme/layouts/Layout.vue';
	import PageBottom from '@theme/components/section/footer.vue';
	export default {
		name: 'Page',
		components: {Layout, PageBottom}
	};
</script>
