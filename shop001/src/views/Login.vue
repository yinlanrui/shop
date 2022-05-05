<template>
  <div class="home">
    <topSav></topSav>
    <Picture></Picture>
    <icons></icons>
    <zhuCe></zhuCe>
  </div>
</template>

<script>
import topSav from "@/components/Login/topNav.vue";
import Picture from "@/components/Login/Picture.vue";
import icons from "@/components/Login/icons.vue";
import zhuCe from "@/components/Login/zhuCe.vue";
export default {
  name: "Login",
  components: {
    topSav,
    Picture,
    icons,
    zhuCe,
  },
};
</script>
<style scoped>
</style>
