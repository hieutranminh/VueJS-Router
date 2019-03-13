<template>
  <div class="selectAll">
    <div>
      <input
        v-model="check"
        type="checkbox"> Select all | boolean : {{check}}
    </div>
    <button class="rmselected">remove selected</button>
  </div>
</template>
<script>
export default {
  computed: {
    check: {
      get () {
        // store -> check
        return this.$store.state.check
      },
      set (value) {
        // v-model -> check
        console.log('set', value)
        this.$store.commit('selectAllTodo', value)
      }
    }
  }
}
</script>
