<template>
  <div class="mt-3">
    <h1>User Detail</h1>
    <p>ID User : {{ id }}</p>
    <hr>
    <router-link
      tag="button"
      class="btn btn-warning btn-block"
      :to="link"
    >Edit user
    </router-link>
    <!--Cách 1 , truyền dạng chuỗi bình thường-->
    <!--:to="'/user/' + $route.params.id + '/edit'"-->
    <!--Cách 2 , dùng name router-->
    <!--:to="{name: 'useredit', params: {id: $route.params.id}}"-->
    <!--:to="{name: 'useredit', params: {id: $route.params.id}, query: {locate: 'vi', browser: 'chrome'}}"-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      link: {
        name: 'useredit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locate: 'vi',
          browser: 'chrome'
        },
        hash: '#react'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    let a = true
    if (a) {
      next()
    } else {
      next(false)
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
