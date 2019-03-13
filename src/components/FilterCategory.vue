<template>
  <div class="footer-todo">
    <p>3 item left</p>
    <button
      @click="filterCate('all')"
      :class="{ active: $store.state.filter === 'all' }"
      class="status">All
    </button>
    <button
      @click="filterCate('active')"
      :class="{ active: $store.state.filter === 'active' }"
      class="status">Active
    </button>
    <button
      @click="filterCate('done')"
      :class="{ active: $store.state.filter === 'done' }"
      class="status">Done
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    filterCate (value) {
      this.$store.commit('filterTodo', value)
    }
  }
}
</script>
