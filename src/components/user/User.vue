<template>
  <div>
    <h1>User</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto asperiores culpa doloremque
      dolorum, expedita id iste officiis possimus? Cupiditate exercitationem illo iure labore perferendis possimus! Ex,
      illo, libero?</p>
    <hr>
    <button class="btn btn-danger" @click="backHome">Back to home</button>
    <button class="btn btn-danger" @click="goDetails">Go User Detail</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      // PUSH lên url để chuyển trang
      this.$router.push('/')
    },
    goDetails () {
      this.$router.push('/user/10')
    }
  }
}
</script>

<style>

</style>
