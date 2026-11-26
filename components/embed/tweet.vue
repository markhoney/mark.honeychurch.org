<template>
	<blockquote class="twitter-tweet" style="margin: 0 auto;">
		<a :href="value">View tweet</a>
	</blockquote>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				required: true
			}
		},
		mounted() {
			const loadWidgets = () => window.twttr?.widgets?.load(this.$el);
			if (window.twttr?.widgets) {
				loadWidgets();
				return;
			}
			const existing = document.querySelector('script[data-twitter-widgets]');
			if (existing) {
				existing.addEventListener('load', loadWidgets, {once: true});
				return;
			}
			const script = document.createElement('script');
			script.src = 'https://platform.twitter.com/widgets.js';
			script.async = true;
			script.dataset.twitterWidgets = '';
			script.addEventListener('load', loadWidgets, {once: true});
			document.head.appendChild(script);
		}
	};
</script>
