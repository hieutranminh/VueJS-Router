<template>
  <div>
    <h1>UserEdit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>Locate : {{$route.query.locate}}</li>
      <li>Browser : {{$route.query.browser}}</li>
    </ul>
    <hr>
    <button @click="status = true" class="btn btn-block btn-danger">Something</button>
    <!--hash fragments-->
    <div style="height: 700px"></div>
    <h3 id="react">Learn ReactJS & Redux in 2019</h3>
    <div style="height: 1700px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: false
    }
  },
  // Ví dụ xem người dùng có muốn rời bỏ trang Edit không
  beforeRouteLeave (to, from, next) {
    if (this.status) {
      next()
    } else {
      if (confirm('Are you sure ? Any data will not save!!!')) {
        next()
      } else {
        next(false)
      }
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
