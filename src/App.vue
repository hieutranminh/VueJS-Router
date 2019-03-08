<template>
  <div>
    <!--<router-view name="header"></router-view>-->
    <Header></Header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  .slide-leave{
    opacity: 1;
  }
  .slide-leave-active{
    transition: opacity 1s;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }
  @keyframes slide-out {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(30px);
    }
  }
</style>
