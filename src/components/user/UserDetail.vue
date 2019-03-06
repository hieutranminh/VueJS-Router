<template>
  <div>
    <h1>User Detail</h1>
    <p>ID User : {{ id }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  // DUNG WATCH để thay đổi ID khi router hade mode
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      console.log(to.params, from)
    }
  }
}
</script>

<style>

</style>
