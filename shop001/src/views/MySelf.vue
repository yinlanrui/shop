<template>
  <div class="home">
    <topNav></topNav>
    <swiperCom></swiperCom>
    <iconList></iconList>
    <musicList></musicList>
  </div>
</template>

<script>
import topNav from "@/components/Myself/topNav.vue";
import swiperCom from "@/components/Myself/swiperCom.vue";
import iconList from "@/components/Myself/iconList.vue";
import musicList from "@/components/Myself/musicList.vue";

export default {
  name: "Myself",
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList,
  },
};
</script>
<style scoped>
</style>