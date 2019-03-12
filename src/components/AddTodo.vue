<template>
  <input
    type="text"
    class="input-text"
    placeholder="What need to be done?" @keyup.enter="addData">
</template>
<script>
export default {
  methods: {
    addData (event) {
      this.$store.dispatch('ADD_DATA', event.target.value)
      console.log('--keyup ', event.target.value)
    }
  }
}
</script>
