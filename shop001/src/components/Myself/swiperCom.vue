<template>
  <div id="swipercom">
    <h2>用户尚未登录</h2>
    <P><a href="/login" style="color: red">请登录</a></P>
  </div>
</template>

<script>
export default {
  name: "toNav",
};
</script>



<style lang="less">
#swipercom {
  width: 7.5rem;
  height: 3.3rem;
  background: url("../../assets/img/user_01.png") no-repeat;
  background-size: 7.5rem 3.3rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
#swipercom h2 {
  font-size: 0.3rem;
  color: rgb(255, 255, 255);
  margin-bottom: 0.14rem;
  line-height: 0.3rem;
}

#swipercom p {
  font-size: 0.24rem;
  color: rgb(187, 187, 187);
  line-height: 0.24rem;
}
a {
  text-decoration: none;
}
</style>