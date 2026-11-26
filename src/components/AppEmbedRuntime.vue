<script setup lang="ts">
import {defineAsyncComponent} from 'vue';

const props = defineProps<{
	app: string;
	componentProps?: Record<string, unknown>;
}>();

const apps = import.meta.glob('../examples/**/*.vue');
const loader = apps[`../examples/${props.app.replace(/\.vue$/, '')}.vue`];

if (!loader) {
	throw new Error(
		`AppEmbed "${props.app}" was not found in src/examples`,
	);
}

const ActiveApp = defineAsyncComponent(loader);
</script>

<template>
	<component :is="ActiveApp" v-bind="componentProps ?? {}" />
</template>
