<template>
	<pre>
		<code class="language-json">
			{{JSON.stringify(site, null, '\t')}}
		</code>
	</pre>
</template>

<script>
	export default {
		props: {
			site: {
				type: Object,
				required: true
			}
		}
	};
</script>
