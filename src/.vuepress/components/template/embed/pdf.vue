<template>
  <object :data="pdf" width="100%" height="800px" />
</template>


<script>
  export default {
    props: ["pdf"]
  };
</script>
