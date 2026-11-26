<template>
	<pre>
		<code class="language-json">
			{{JSON.stringify(page, null, '\t')}}
		</code>
	</pre>
</template>

<script>
	export default {
		props: {
			page: {
				type: Object,
				required: true
			}
		}
	};
</script>
