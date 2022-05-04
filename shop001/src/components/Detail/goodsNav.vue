<template>
  <div>
    <div class="goodsNav">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-sdf"></use>
        </svg>
      </div>
      <div class="topCenter">
        <span class="navBtn active">商品</span>
        <span class="navBtn">详情</span>
        <span class="navBtn">评价</span>
      </div>
      <div class="topRight"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsnav",
};
</script>

<style lang="less" scoped>
.goodsNav {
  width: 7.5rem;
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  background:rgb(170, 107, 228) ;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .search {
    width: 0.45rem;
    height: 0.45rem;
  }
  .topCenter {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;
    color: #fff;
    .active {
      color: orange;
    }
  }
}
</style>
