<template>
  <div class="selectAll">
    <div>
      <input
        @change="selectAll"
        v-model="check"
        type="checkbox"> Select all | boolean : {{check}}
    </div>
    <button @click="removeAllDone" class="rmselected">remove selected</button>
  </div>
</template>
<script>
export default {

  data () {
    return {
      check: false
    }
  },
  created () {
    this.$store.commit('selectAllTodo', this.check)
  },

  computed: {
    dummy () {
      return this.$store.state.check
    }
  },
  watch: {
    dummy () {
      this.check = this.$store.state.check
    }
  },
  methods: {
    selectAll () {
      this.$store.commit('selectAllTodo', this.check)
    },
    removeAllDone () {
    }
  }
}
</script>
