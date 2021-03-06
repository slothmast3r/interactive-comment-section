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
        <div
          v-if="editActive"
          class="edit-wrapper"
        >
          <my-text-area
            :value="commentEditableText"
  
            style="margin: 20px 0"
            :label="'edit-comment'"
            @input="textAreaInput"
          />
          <button
            class="site-button"
            @click="editComment"
          >
            UPDATE
          </button>
        </div>
        <div
          v-else
          class="comment-text"
        >
          <div
            v-if="replyingTo"
            class="replying-to"
          >
            {{ '@'+replyingTo }}
          </div>
          {{ commentContent }}
        </div>
      </div>
      <div
        v-if="!isYou"
        class="left-buttons"
        :class="showReplySection ? 'activated' : '' "
        @click="replyToAComment"
      >
        <reply-icon :active="showReplySection" />
        <div>Reply</div>
      </div>
      <div
        v-else
        class="left-buttons"
      >
        <div
          class="delete-button"
          @click="deleteCommentPopup(commentId)"
        >
          <img
            alt="Delete Icon"
            :src="require('@/assets/images/icon-delete.svg')"
          >
          Delete
        </div>
        <div>
          <div
            class="edit-button"
            :class="editActive ? 'activated' : ''"
            @click="switchEdit"
          >
            <edit-icon :active="editActive" />

            Edit
          </div>
        </div>
      </div>
    </div>
    <comment-text-area
      v-if="showReplySection"
      :current-user="currentUser"
      :replying-to="user"
      :reply-comment-id="replyingTo? parentCommentId : commentId"
      @send-reply="sendReply"
    />
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
        :parent-comment-id="commentId"
        :current-user="currentUser"
        :replying-to="reply.replyingTo"
        @delete-comment-popup="deleteCommentPopup(reply.id)"
      />
    </div>
  </div>
</template>

<script>
import PlusSign from "@/assets/PlusSign";
import MinusSign from "@/assets/MinusSign";
import ReplyIcon from "@/assets/ReplyIcon";
import moment from "moment";
import EditIcon from "@/assets/EditIcon";
import MyTextArea from "@/components/MyTextArea";
import CommentTextArea from "./CommentTextArea";
export default {
  name: "Comment",
  components: {CommentTextArea, MyTextArea, EditIcon, ReplyIcon, MinusSign, PlusSign},
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
    },
    replyingTo: {
      default: undefined,
      type: String,
    },
    parentCommentId:{
      default: null,
      type: Number
    }

  },
emits: ['delete-comment-popup'],
  data(){
    return {
      editActive: false,
      commentEditableText: '',
      showReplySection: false,
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
    replyToAComment(){
      this.showReplySection = !this.showReplySection
    },
    switchEdit(){
      this.editActive = !this.editActive
      if(this.editActive){
        this.commentEditableText = this.commentContent
        if(this.replyingTo){
          this.commentEditableText = '@'+this.replyingTo+ ' ' + this.commentEditableText
        }
      }
    },
    editComment(){
      let replyingTo
      if(this.commentEditableText[0] === '@'){
        replyingTo = this.commentEditableText.split(' ')[0]
        this.commentEditableText = this.commentEditableText.substr(replyingTo.length + 1)
        replyingTo = replyingTo.substring(1)
      }
      this.$store.commit('editCommentById', {commentId: this.commentId, commentContent: this.commentEditableText, replyingTo})
      this.switchEdit()
    },
    textAreaInput(input){
      this.commentEditableText = input
    },
    changeScore(score){
      if(score === this.userScore){
        score = 0
      }
      this.$store.commit('addUserScoreById', {commentId: this.commentId, userScore: score})
    },
    deleteCommentPopup(id){
      this.$emit('delete-comment-popup', id)
    },
    sendReply(payload){
      if(payload.content[0][0] === '@'){
        payload.content = payload.content.substr(payload.content.indexOf(' ')+1)
      }
      this.$store.commit('sendReply',payload)
      this.replyToAComment()
    }
  }

}
</script>

<style scoped lang="scss">

.comment-wrapper{
  margin: 20px 20px 10px 20px;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background: $white;
  position: relative;
  @media screen and (max-width: $mobilePhoneWidth) {
    flex-direction: column-reverse;
    gap: 10px;
  }
  .comment-rating{
    height: fit-content;
    padding: 0 5px 8px 5px;
    color: $moderateBlue;
    font-weight: 700;
    border-radius: 8px;
    text-align: center;
    background: $veryLightGray;

    @media screen and (max-width: $mobilePhoneWidth) {
      display: flex;
      width: fit-content;
      padding: 0;
      justify-content: center;
    }
    .sign{
      cursor: pointer;
    }
    .element{
      margin: 5px 5px;
      @media screen and (max-width: $mobilePhoneWidth){
        display: flex;
        align-items: center;
      }
    }
    .minus{
    }
  }
  .content-wrapper {
    margin-left: 20px;
    width: 100%;
    @media screen and (max-width: $mobilePhoneWidth){
      margin-left: 0;
    }
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
        border-radius: 3px;
      }
      .username-text {
        font-weight: 700;
      }
    }
    .edit-wrapper{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .site-button{
        width: fit-content;
      }
    }
    .comment-text{
      overflow-wrap: break-word;
      margin-top: 10px;
      .replying-to{
        display: inline;
        color: $moderateBlue;
        font-weight: 700;
      }
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
    gap: 10px;
    &.activated{
      color: $lightGrayishBlue;
    }
    .edit-button{
      &.activated{
        color: $lightGrayishBlue;
      }
    }
    .delete-button{
      color: $softRed;
      padding: 0 30px;
    }
  }
}

.reply-wrapper{
  border-left: 2px solid $lightGray;
  padding-left: 20px;
  margin-left: 50px;
  @media screen and (max-width: $mobilePhoneWidth){
    margin-left: 20px;
    padding-left: 0;
  }
}
/deep/ .add-comment-wrapper{
  margin: 10px 20px;
}
</style>