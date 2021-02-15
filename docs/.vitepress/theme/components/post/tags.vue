<template>
	<span v-if="tags">
		<router-link v-for="(tag, index) in tags" :key="index" :to="'/blog/tag/?name=' + tag">{{tag}}<span v-if="index + 1 < tags.length">, </span></router-link>
	</span>
</template>

<script>
	export default {
		props: ["tags"]
	};
</script>
