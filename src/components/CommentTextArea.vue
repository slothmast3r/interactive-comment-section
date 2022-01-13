<template>
  <div class="add-comment-wrapper">
    <img
      alt="avatar"
      :src="getImgUrl(currentUser.image.png)"
    >
    <textarea
      :ref="'textArea'"
      v-model="commentText"
      :placeholder="'Add a comment...'"
      @input="resizeTextArea"
    />
    <button
      class="send-button"
      @click="sendReply"
    >
      SEND
    </button>
  </div>
</template>

<script>
export default {
  name: "CommentTextArea",
  props:{
    currentUser:{
      default: undefined,
      type: Object,
    }
  },
  emits: ['send-reply'],
  data(){
    return{
      commentText: '',
    }
  },
  created() {
  },
  methods:{
    getImgUrl(url) {
      return require('@/assets/' + url.substring(2))
    },
    resizeTextArea(){
      this.$refs.textArea.style.height = '1px'
      var scroll_height = this.$refs.textArea.scrollHeight;
      this.$refs.textArea.style.height = scroll_height + 'px'
    },
    sendReply(){
      let payload = {
        id: this.$store.state.id,
        content: this.commentText,
        score: 0,
        user: this.currentUser,
        createdAt: new Date()
      }
      this.$emit('send-reply',payload)
      this.commentText = ''
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
    font-weight: 700;
    color: $white;
    background: $moderateBlue;
    box-shadow: none;
    border-radius: 5px;
    height: fit-content;
    padding: 10px 20px;
    border: none;
    outline: inherit;
  }
  textarea{
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    resize: none;
    min-height: 100px;
    transition: 0.3s ease;
    margin: 0 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid $lightGrayishBlue;
  }
}
</style>