<template>
  <div class="comment-wrapper">
    <div class="comment-rating">
      <div class="plus element"><img alt="Plus" :src="require('/src/assets/images/icon-plus.svg')"></div>
      <div class="count element">{{ ratingCount }}</div>
      <div class="minus element"><img alt="Minus" :src="require('/src/assets/images/icon-minus.svg')"></div>
    </div>
    <div class="content-wrapper">
      <div class="person-and-time"></div>

    </div>
    <div class="reply"></div>
    <div class="comment-text"> </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    ratingCount: {
      default: 0,
      type: Number,
    }
  },
}
</script>

<style scoped lang="scss">

.comment-wrapper{
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background: $white;
  text-align: center;
  position: relative;
  .comment-rating{
    padding: 0px 5px;

    border-radius: 8px;
    background: $veryLightGray;
    .element{
      margin: 5px 5px;
    }
  }
}
</style>