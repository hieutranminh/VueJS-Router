<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="mt-3">
        <h1 class="text-center">User Management</h1>
        <p class="text-center">This is area to manage user of website</p>
        <hr>
        <button class="btn btn-danger btn-block" @click="backHome">Back to home</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      // PUSH lên url để chuyển trang
      this.$router.push('/')
      // Có thể dùng name trong routes để dễ nhớ
      // this.$router.push({name: 'homepage'})
    },
    goDetails () {
      this.$router.push('/user/10')
    }
  }
}
</script>

<style>

</style>
