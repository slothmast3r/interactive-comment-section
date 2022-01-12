<template>
  <div class="comment-wrapper">
    <div class="comment-rating">
      <div class="plus element">
        <img
          alt="Plus"
          :src="require('/src/assets/images/icon-plus.svg')"
        >
      </div>
      <div class="count element">
        {{ ratingScore }}
      </div>
      <div class="minus element">
        <img
          alt="Minus"
          :src="require('/src/assets/images/icon-minus.svg')"
        >
      </div>
    </div>
    <div class="content-wrapper">
      <div class="person-and-time" />
    </div>
    <div class="reply" />
    <div class="comment-text">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    ratingScore: {
      default: 0,
      type: Number,
    },
    content:{
      default: '',
      type: String,
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
    padding: 0 5px;
    color: $moderateBlue;
    font-weight: 700;
    border-radius: 8px;
    background: $veryLightGray;
    .element{
      margin: 5px 5px;
    }
  }
}
</style>