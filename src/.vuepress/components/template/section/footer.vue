<template>
	<footer>
		<p>
			<a href="http://fb.me/mark.honeychurch" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-facebook-f"></i>
				Facebook
			</a>
			|
			<a href="https://twitter.com/markhoney" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-twitter"></i>
				Twitter
			</a>
			|
			<a href="https://www.linkedin.com/in/markhoneychurch" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-linkedin-in"></i>
				LinkedIn
			</a>
			|
			<a href="https://github.com/markhoney" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-github"></i>
				Github
			</a>
			|
			<router-link to="/contact/">
				<i class="fa fa-envelope"></i>
				Contact
			</router-link>
		</p>
		<p>
			<a href="https://mark.honeychurch.org/rss.xml" target="_blank" rel="noopener noreferrer">
				<i class="fas fa-rss"></i>
				RSS
			</a>
			|
			<a href="https://mark.honeychurch.org/feed.atom" target="_blank" rel="noopener noreferrer">
				<i class="fas fa-atom"></i>
				Atom
			</a>
			|
			<a href="https://mark.honeychurch.org/feed.json" target="_blank" rel="noopener noreferrer">
				<i class="fab fa-js"></i>
				JSON
			</a>
		</p>
		<!--<p>
			<router-link to="/status/steam/">
				<i class="fab fa-steam"></i>
				Steam
			</router-link>
			|
			<router-link to="/status/facebook/">
				<i class="fab fa-facebook-f"></i>
				Facebook
			</router-link>
			|
			<router-link to="/status/twitter/">
				<i class="fab fa-twitter"></i>
				Twitter
			</router-link>
		</p>-->
		<p>Copyright © {{new Date().getFullYear()}} Mark Honeychurch</p>
	</footer>
</template>

<style scoped>
	footer {
		padding-bottom: 2em;
		text-align: center;
	}

	footer a {
		color: #545a57;
	}
</style>
