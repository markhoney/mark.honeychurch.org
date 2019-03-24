<template>
	<div>
		<a class="twitter-timeline" href="https://twitter.com/markhoney?ref_src=twsrc%5Etfw">Tweets by markhoney</a>
		<!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
	</div>
</template>

<script>
	export default {
		mounted() {
			let twitter = document.createElement("script");
			twitter.setAttribute("src", "https://platform.twitter.com/widgets.js");
			document.head.appendChild(twitter);
		}
	};
</script>
