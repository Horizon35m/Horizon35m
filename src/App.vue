<template>
  <div id="app">
    <NavBar />
    <div class="view"><router-view /></div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "@/assets/scss/main.scss";
</style>
