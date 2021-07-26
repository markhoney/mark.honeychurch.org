<template>
	<Tweet :id="value.split('/').pop()" style="margin: 0 auto;" />
</template>
<script>
	import {Tweet} from "vue-tweet-embed";
	export default {
		props: ['value'],
		components: {Tweet},
	};
</script>
