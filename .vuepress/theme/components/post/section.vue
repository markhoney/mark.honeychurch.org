<template>
	<router-link :to="'/blog/' + section + '/'">
		{{section.charAt(0).toUpperCase()}}{{section.slice(1)}}
	</router-link>
</template>

<script>
export default {
	computed: {
		section: function() {
			return this.$page.path.split('/')[2];
		}
	}
};
</script>
