<template>
  <div class="add-comment-wrapper">
    <img
      alt="avatar"
      :src="getImgUrl(currentUser.image.png)"
    >
    <my-text-area
      :ref="'textArea'"
      v-model="commentText"
      :label="'comment'"
      style="margin: 0 20px"
      :value="commentText"
      :placeholder="'Add a comment...'"
      @input="textAreaInput"
    />
    <button
      class="site-button send-button"
      @click="sendReply"
    >
      {{ replyingTo? 'REPLY':'SEND' }}
    </button>
  </div>
</template>

<script>
import MyTextArea from "@/components/MyTextArea";
export default {
  name: "CommentTextArea",
  components: {MyTextArea},
  props:{
    currentUser:{
      default: undefined,
      type: Object,
    },
    replyingTo:{
      default: undefined,
      type: Object
    },
    replyCommentId:{
      default: undefined,
      type: Number
    }
  },
  emits: ['send-reply'],
  data(){
    return{
      commentText: '',
    }
  },
  created() {
    if(this.replyingTo)
      this.commentText = '@'+this.replyingTo.username + ' '
  },
  methods:{
    getImgUrl(url) {
      return require('@/assets/' + url.substring(2))
    },
    sendReply(){
      let payload = {
        id: this.$store.state.lastId,
        content: this.commentText,
        score: 0,
        user: this.currentUser,
        createdAt: new Date(),
        replyingTo : this.replyingTo? this.replyingTo.username:undefined,
        replyCommentId: this.replyCommentId
      }
      this.$store.commit('increment')
      this.$emit('send-reply',payload)
      this.commentText = ''
    },
    textAreaInput(value){
      this.commentText = value
    }
  }
}
</script>

<style scoped lang="scss">
.add-comment-wrapper{
  margin: 20px;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background: $white;
  position: relative;
  img{
    width: 40px;
    height: 40px;
  }
  .send-button{
    right: 20px;
  }
}
</style>