<template>
	<section>
		<div id="fb-root"></div>
		<div class="fb-page" data-href="https://www.facebook.com/mark.honeychurch" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
	</section>
</template>

<script>
  export default {
    mounted() {
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src =
          "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=757101907970172";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  };
</script>
