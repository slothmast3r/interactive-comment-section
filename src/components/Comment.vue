<template>
  <div class="comment-wrapper">
    <div class="comment-rating">
      <div class="plus element">
        <plus-sign :active="false" />
      </div>
      <div class="count element">
        {{ ratingScore }}
      </div>
      <div class="minus element">
        <minus-sign :active="false" />
      </div>
    </div>
    <div class="content-wrapper">
      <div class="person-and-time">
        <img alt="avatar" :src="getImgUrl(user.image.png)">
        <div class="username-text">
          {{ user.username }}
        </div>
        <div class="time-text">
          {{ createdAt }}
        </div>
      </div>
      <div class="comment-text">
        {{ commentContent }}
      </div>
    </div>
    <div class="reply-button" >
      <reply-icon :active="false" />
      <div>Reply</div>
    </div>
  </div>
</template>

<script>
import PlusSign from "@/assets/PlusSign";
import MinusSign from "@/assets/MinusSign";
import ReplyIcon from "@/assets/ReplyIcon";
export default {
  name: "Comment",
  components: {ReplyIcon, MinusSign, PlusSign},
  props: {
    ratingScore: {
      default: 0,
      type: Number,
    },
    commentContent: {
      default: '',
      type: String,
    },
    createdAt: {
      default: '',
      type: String,
    },
    user: {
      default: undefined,
      type: Object,
    }
  },
  data(){
    return {
    }
  },
  methods: {
    getImgUrl(url) {
      return require('@/assets/' + url.substring(2))
    }
  }

}
</script>

<style scoped lang="scss">

.comment-wrapper{
  margin: 20px;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background: $white;
  position: relative;
  .comment-rating{
    padding: 0 5px;
    color: $moderateBlue;
    font-weight: 700;
    border-radius: 8px;
    text-align: center;
    background: $veryLightGray;
    .element{
      margin: 5px 5px;
    }
  }
  .content-wrapper {
    margin-left: 20px;
    img{
      width: 30px;
      height: 30px;
    }
    .person-and-time {
      display: flex;
      align-items: center;
      gap: 15px;
      .username-text {
        font-weight: 700;
      }
    }
    .comment-text{
      margin-top: 10px;
    }
  }
  .reply-button{
    cursor: pointer;
    display: flex;
    position: absolute;
    font-weight: 700;
    right: 0;
    padding: 0 20px;
    color: $moderateBlue;
    align-items: center;
    gap: 10px
  }
}
</style>