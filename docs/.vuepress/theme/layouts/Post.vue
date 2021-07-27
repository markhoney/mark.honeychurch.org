<template>
	<layout>
		<template #page-top>
			<page-top />
		</template>
		<template #page-bottom>
			<page-bottom />
		</template>
	</layout>
</template>

<script>
	import Layout from '@parent-theme/layouts/Layout.vue'
	import PageTop from '@theme/components/section/header.vue';
	import PageBottom from '@theme/components/section/footer.vue';
	export default {
		name: 'Post',
		components: {Layout, PageTop, PageBottom}
	};
</script>
