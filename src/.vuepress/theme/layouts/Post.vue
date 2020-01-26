<template>
	<section>
		<ParentLayout>
			<template v-slot="page-top">
				<pagetop />
			</template>
			<pagetop slot="page-top" />
			<template #page-bottom>
				<pagebottom />
			</template>
			<pagebottom slot="page-bottom" />
		</ParentLayout>
	</section>
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
