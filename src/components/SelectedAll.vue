<template>
  <div class="selectAll">
    <div>
      <input
        v-model="check"
        type="checkbox"> Select all | boolean : {{check}}
    </div>
    <button @click="removeAllDone" class="rmselected">remove selected</button>
  </div>
</template>
<script>
export default {
  methods: {
    removeAllDone () {
      this.$store.commit('removeAllDone', this.check)
    }
  },
  computed: {
    // Cach 1 : Get Set trực tiếp store.state
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
    // Cách 2 : Get Set thông qua getters
    // changeCheck: {
    //   get () {
    //     return this.$store.getters.changeCheck
    //   },
    //   set (value) {
    //     this.$store.commit('selectAllTodo', value)
    //   }
    // }
  }
}
</script>
