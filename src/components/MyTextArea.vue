<template>
  <textarea
    :ref="'textArea'"
    :value="value"
    :name="name"
    type="text"
    :placeholder="'Add a comment...'"
    @input="input"
  />
</template>

<script>
export default {
  name: "MyTextArea",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
emits: ['input'],
  data(){
    return{
      text: ''
    }
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  mounted() {
    this.resizeTextArea()
  },
  methods:{
    input(event){
      this.$emit('input',event.target.value)
      this.resizeTextArea()
    },

    resizeTextArea(){
      this.$refs.textArea.style.height = '1px'
      var scroll_height = this.$refs.textArea.scrollHeight;
      this.$refs.textArea.style.height = scroll_height + 'px'
    },
  }
}
</script>

<style scoped lang="scss">
textarea{
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  resize: none;
  min-height: 100px;
  transition: 0.3s ease;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid $lightGrayishBlue;
}
</style>