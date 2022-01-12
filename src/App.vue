<template>
  <div>
    <div class="attribution">
      <comment></comment>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/slothmast3r">slothmast3r</a>.
    </div>
  </div>
</template>

<script>

import Comment from "@/components/Comment";
export default {
  name: 'App',
  components: {
    Comment
  }
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>
