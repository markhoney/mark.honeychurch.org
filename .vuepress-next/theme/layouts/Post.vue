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
	import PageTop from '@theme/Header.vue';
	import PageBottom from '@theme/Footer.vue';
	export default {
		name: 'Post',
		components: {Layout, PageTop, PageBottom}
	};
</script>
