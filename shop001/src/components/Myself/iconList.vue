<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <img src="../../assets/img/user_03.png">
      </svg>
      <span>我的订单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <img href=".../assets/img/user_04.png">
      </svg>
      <span>我的钱包</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <img href="../assets/img/user_05.png">
        <span>我的收藏</span>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "iconList",
};
</script>

<style lang="less" scoped>
.iconList {
  width: 7.5rem;
  height: 1.15rem;
  display: flex;
  padding: 0.14rem 0.86rem 0.2rem 0.86rem;
  justify-content: space-between;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon image:nth-child(1) {
      width: 0.3rem;
      height: 0.39rem;
    }
    .icon {
      width: 0.3rem;
      height: 0.4rem;
      margin-bottom: 0.1rem;
    }
    span {
      font-size: 0.26rem;
    }
  }
}
</style>