<template>
  <SearchTop></SearchTop>
  <Swiper></Swiper>
  <ShopClass></ShopClass>
  <ShopHot></ShopHot>

</template>

<script>

import SearchTop from '@/components/Home/SearchTop.vue'
import ShopClass from '@/components/Home/ShopClass.vue'
import ShopHot from '@/components/Home/ShopHot.vue'
import Swiper from '@/components/Home/Swiper.vue'

export default {
  name: 'HomeView',
  components: {
    SearchTop,ShopClass,ShopHot,Swiper
  }
}
</script>
