<template>
  <div>
    <div class="comment-wrapper">
      <div class="comment-rating">
        <div
          class="plus sign element"
          @click="changeScore(1)"
        >
          <plus-sign
            :active="userScore === 1"
          />
        </div>
        <div
          class="count element"
        >
          {{ ratingScore + userScore }}
        </div>
        <div
          class="minus sign element"
          @click="changeScore(-1)"
        >
          <minus-sign
            :active="userScore === -1"
          />
        </div>
      </div>
      <div class="content-wrapper">
        <div class="person-and-time">
          <img
            alt="avatar"
            :src="getImgUrl(user.image.png)"
          >
          <div class="username-text">
            {{ user.username }}
          </div>
          <div
            v-if="isYou"
            class="you-tag"
          >
            you
          </div>
          <div class="time-text">
            {{ showDate }}
          </div>
        </div>
        <div class="comment-text">
          {{ commentContent }}
        </div>
      </div>
      <div
        v-if="!isYou"
        class="left-buttons"
      >
        <reply-icon :active="false" />
        <div>Reply</div>
      </div>
      <div
        v-else
        class="left-buttons"
      >
        <div>Delete</div>
        <div>Edit</div>
      </div>
    </div>
    <div class="reply-wrapper">
      <comment
        v-for="reply in replies"
        :key="reply.id"
        :rating-score="reply.score"
        :comment-content="reply.content"
        :user="reply.user"
        :created-at="reply.createdAt"
        :comment-id="reply.id"
        :user-score="reply.userScore"
        :current-user="currentUser"
      />
    </div>
  </div>
</template>

<script>
import PlusSign from "@/assets/PlusSign";
import MinusSign from "@/assets/MinusSign";
import ReplyIcon from "@/assets/ReplyIcon";
import moment from "moment";
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
      type: String || Date,
    },
    user: {
      default: undefined,
      type: Object,
    },
    commentId:{
      default: null,
      type: Number
    },
    userScore:{
      default: 0,
      type: Number
    },
    replies:{
      default: function (){return []},
      type: Array
    },
    currentUser:{
      default: function (){
        return {username: ''}
      },
      type: Object
    }

  },
  data(){
    return {
    }
  },
  computed:{
    showDate(){
      return moment(this.createdAt).isValid()? moment(this.createdAt).fromNow() : this.createdAt
    },
    isYou(){
      return this.user.username === this.currentUser.username
    },
  },
  created() {

    moment.suppressDeprecationWarnings = true;
  },
  methods: {
    getImgUrl(url) {
      return require('@/assets/' + url.substring(2))
    },
    changeScore(score){
      if(score === this.userScore){
        score = 0
      }
      this.$store.commit('addUserScoreById', {commentId: this.commentId, userScore: score})
    },
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
    .sign{
      cursor: pointer;
    }
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
      .you-tag{
        color: $white;
        font-weight: 700;
        padding: 1px 5px;
        background: $moderateBlue;
        border-radius: 1px;
      }
      .username-text {
        font-weight: 700;
      }
    }
    .comment-text{
      margin-top: 10px;
    }
  }
  .left-buttons{
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
.reply-wrapper{
  border-left: 1px solid $lightGray;
  padding-left: 20px;
  margin-left: 50px;
}
</style>