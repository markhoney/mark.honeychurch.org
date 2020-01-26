<template>
	<ParentLayout>
		<template #page-bottom>
			<pagebottom />
		</template>
	</ParentLayout>
</template>

<script>
	import ParentLayout from '@parent-theme/layouts/Layout.vue';
	import pagebottom from '@theme/components/section/footer.vue';
	export default {
		// name: 'Page',
		components: {ParentLayout, pagebottom}
	};
</script>
