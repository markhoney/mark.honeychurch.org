<template>
	<pre>
		<code class="language-json">
			{{JSON.stringify(location, null, '\t')}}
		</code>
	</pre>
</template>

<script>
	export default {
		data() {
			return {
				location: null
			};
		},
		mounted() {
			this.location = window.location;
		}
	};
</script>
