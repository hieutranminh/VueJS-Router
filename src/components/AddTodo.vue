<template>
  <input
    type="text"
    class="input-text"
    ref="inputAdd"
    placeholder="What need to be done?" @keypress.exact.prevent.enter="addData">
</template>
<script>
export default {
  methods: {
    addData (event) {
      if (event.target.value) {
        this.$store.dispatch('ADD_DATA', event.target.value)
        this.$refs.inputAdd.value = ''
        console.log('--keyup ', event.target.value)
      }
    }
  }
}
</script>
