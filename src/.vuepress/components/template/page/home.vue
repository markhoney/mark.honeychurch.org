<template>
  <main aria-labelledby="main-title" class="home">
    <header class="hero">
      <img src="/media/images/icons/android-chrome-512x512.png" alt="hero" class="nomedium">
      <h1 id="main-title">Mark Honeychurch</h1>
      <p class="description">
        <!--<router-link to="/blog/code/">Coder</router-link>, <router-link to="/blog/skepticism/">Skeptic</router-link>, Humanist-->
        Coder, Skeptic, Humanist
      </p>
    </header>
    <div class="features">
      <div class="feature">
        <h2>
          <router-link to="/cv/">WORK</router-link>
        </h2>
        <p>I am an IT professional with 20 years in the field, focusing on both support and development. I have a passion for technology.</p>
      </div>
      <div class="feature">
        <h2>
          <router-link to="/blog/code/">CODE</router-link>
        </h2>
        <p>I write software for work and for fun, using modern tools. I like helping people to adopt new technologies, and I teach kids how to code.</p>
      </div>
      <div class="feature">
        <h2>
          <router-link to="/blog/skepticism/">PLAY</router-link>
        </h2>
        <p>I am an active Skeptic and Humanist, with a common sense view of the world. I work to inform the public and protect them from nonsense.</p>
      </div>
    </div>
    <h2>My Recent Ramblings</h2>
    <recent/>
  </main>
</template>

<script>
import recent from '../list/recent.vue';
export default {
  components: { recent }
};
</script>
