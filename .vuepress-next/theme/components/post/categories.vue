<template>
	<span v-if="categories">
		<router-link v-for="(category, index) in categories" :key="index" :to="'/blog/category/?name=' + category">
			{{category}}<span v-if="index + 1 < categories.length">, </span>
		</router-link>
	</span>
</template>

<script>
	export default {
		props: ["categories"]
	};
</script>
