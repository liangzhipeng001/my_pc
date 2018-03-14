<template>
  <div id="app">
    <Banner-view></Banner-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    "Banner-view": Banner
  }
};
</script>

<style>

</style>
