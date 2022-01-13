<template>
  <div class="app">
    <div class="attribution">
      <comment
        v-for="el in $store.state.comments"
        :key="el.id"
        :rating-score="el.score"
        :comment-content="el.content"
        :user="el.user"
        :created-at="el.createdAt"
        :comment-id="el.id"
        :user-score="el.userScore"
        :replies="el.replies"
        :current-user="currentUser"
      />
      <comment-text-area
        :current-user="currentUser"
        @send-reply="sendComment"
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
import data from '/data/data.json';
import CommentTextArea from "@/components/CommentTextArea";


export default {
  name: 'App',
  components: {
    CommentTextArea,
    Comment
  },
  data(){
    return{
      currentUser: data.currentUser,
      comments: data.comments
    }
  },
  created() {
    if(this.$store.state.comments.length <= 0) {
      this.$store.commit('saveComments', this.comments)
    }
  },
  methods:{
    sendComment(payload){
      this.$store.commit('addNewComment',payload)
    }
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
  align-items: center;
  margin-left: 15%;
  margin-right: 15%;
}
</style>
