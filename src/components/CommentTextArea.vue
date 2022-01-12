<template>
  <div class="add-comment-wrapper">
    <img alt="avatar" :src="getImgUrl(currentUser.image.png)">
    <textarea/>
    <button class="send-button"> SEND</button>
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
  created() {
  },
  methods:{
    getImgUrl(url) {
      return require('@/assets/' + url.substring(2))
    },
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
    position: absolute;
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
}
</style>