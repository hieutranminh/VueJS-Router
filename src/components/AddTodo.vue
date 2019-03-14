<template>
  <input
    type="text"
    class="input-text"
    ref="add"
    placeholder="What need to be done?" @keypress.exact.prevent.enter="addData">
</template>
<script>
export default {
  methods: {
    addData (event) {
      this.$store.dispatch('ADD_DATA', event.target.value)
      this.$refs.add.value = ''
      console.log('--keyup ', event.target.value)
    }
  }
}
</script>
