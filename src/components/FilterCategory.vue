<template>
  <div class="footer-todo">
    <p>3 item left</p>
    <button @click="filterCate = 'all'" class="status">All</button>
    <button @click="filterCate = 'active'" class="status">Active</button>
    <button @click="filterCate = 'done'" class="status">Done</button>
  </div>
</template>
<script>
export default {
  computed: {
  }
}
</script>
