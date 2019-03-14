<template>
  <input
    type="text"
    class="input-text"
    v-model="content"
    placeholder="What need to be done?" @keypress.exact.prevent.enter="addData">
</template>
<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    addData (event) {
      let self = this
      if (this.content) {
        this.$store.dispatch('ADD_DATA', this.content).then(function () {
          self.content = ''
        })
        console.log('--keyup ', event.target.value)
      }
    }
  }
}
</script>
