<template>
	<ParentLayout>
		<template #page-top>
			<pagetop />
		</template>
		<template #page-bottom>
			<pagebottom />
		</template>
	</ParentLayout>
</template>

<script>
	import ParentLayout from '@parent-theme/layouts/Layout.vue';
	import pagetop from '@theme/components/section/header.vue';
	import pagebottom from '@theme/components/section/footer.vue';
	export default {
		// name: 'Post',
		components: {ParentLayout, pagetop, pagebottom}
	};
</script>
