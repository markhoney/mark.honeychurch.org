<template>
	<parent-layout>
		<template #page-top>
			<page-top />
		</template>
		<template #page-bottom>
			<page-bottom />
		</template>
	</parent-layout>
</template>

<script>
	import ParentLayout from '@parent-theme/layouts/Layout.vue';
	import PageTop from '@theme/components/section/header.vue';
	import PageBottom from '@theme/components/section/footer.vue';
	export default {
		// name: 'Post',
		components: {ParentLayout, PageTop, PageBottom}
	};
</script>
