<template>
  <div class="delete-wrapper">
    <div
      v-click-outside="()=>close"
      class="content-wrapper"
    >
      <div class="title">
        Delete Comment
      </div>
      <div class="text">
        Are you sure you want to delete this comment? This will remove the comment and can't be undone.
      </div>
      <div class="buttons">
        <button
          class="site-button cancel"
          @click="close"
        >
          NO, CANCEL
        </button>
        <button
          class="site-button confirm"
          @click="$emit('confirm')"
        >
          YES, DELETE
        </button>
      </div>
    </div>
  </div>
</template>

<script>


import clickOutside from 'click-outside-vue3'
export default {
  name: "DeletePopup",
  directives:{
    clickOutside: clickOutside
  },
  emits: ['confirm', 'cancel'],
  methods:{
    close(){
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped lang="scss">
.delete-wrapper{
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(black,0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  .content-wrapper{
    border-radius: 0.8rem;
    padding: 2rem;
    width: 20rem;
    background: white;
    .title{
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .text{
      line-height: 1.5rem;
      margin-bottom: 1rem;
    };
    .buttons {
      display: flex;
      justify-content: space-between;
      .site-button{
        padding: 0.8rem 1.6rem;
        font-size: 1rem;
      }
      .cancel {
        background: $grayishBlue;
      }

      .confirm {
        background: $softRed;
      }
    }
  }
}
</style>