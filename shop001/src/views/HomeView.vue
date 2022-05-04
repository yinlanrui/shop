<template>
  <Search></Search>
  <Swiper></Swiper>
  <ShopClass></ShopClass>
  <ShopHot></ShopHot>

</template>

<script>

import Search from '@/components/Home/Search.vue'
import ShopClass from '@/components/Home/ShopClass.vue'
import ShopHot from '@/components/Home/ShopHot.vue'
import Swiper from '@/components/Home/Swiper.vue'

export default {
  name: 'HomeView',
  components: {
    Search,ShopClass,ShopHot,Swiper
  }
}
</script>
