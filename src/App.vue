<template>
  <div>
    <div class="attribution">
      <comment
        v-for="el in comments"
        :key="el.id"
        :rating-score="el.score"
        :comment-content="el.content"
        :user="el.user"
        :username="el.username"
      />
      Challenge by <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >Frontend Mentor</a>.
      Coded by <a href="https://github.com/slothmast3r">slothmast3r</a>.
    </div>
  </div>
</template>

<script>

import Comment from "@/components/Comment";
import data from '/data/data.json'


export default {
  name: 'App',
  components: {
    Comment
  },
  data(){
    return{
      currentUser: data.currentUser,
      comments: data.comments
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

body{

  background: $veryLightGray;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
</style>
