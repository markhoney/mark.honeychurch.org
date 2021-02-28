<template>
	<parent-layout>
		<template #page-bottom>
			<page-bottom />
		</template>
	</parent-layout>
</template>

<script>
	import ParentLayout from '@parent-theme/layouts/Layout.vue';
	import PageBottom from '@theme/components/section/footer.vue';
	export default {
		// name: 'Page',
		components: {ParentLayout, PageBottom}
	};
</script>
