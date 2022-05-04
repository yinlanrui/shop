<template>
  <div class="goodsShow">
    <div class="goods-container">
      <!-- 图片 -->
      <img :src="url+detail.data.photo" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsShow",
  props:['detail','url'],

};
</script>
<style scoped>
.goodsShow {
  width: 7.5rem;
}
.goods-container {
  width: 6.1rem;
  height: 6.6rem;
  border-radius: 0.1rem;
  margin: 0 auto;
}
.goods-container>img{
  width: 100%;
  height: 100%;
}
</style>


