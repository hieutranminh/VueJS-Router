<template>
  <div>
    <h1>UserEdit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>Locate : {{$route.query.locate}}</li>
      <li>Browser : {{$route.query.browser}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
