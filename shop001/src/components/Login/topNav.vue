<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true"></svg>
    </div>
    <div class="topCenter">
      <span class="navBtn">个人中心</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true"></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "toNav",
};
</script>

<style lang="less" scoped>
.navBtn {
  color: white;
}
.topNav {
  background-color: #8e79ce;
  width: 7.5rem;
  height: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
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
    .active {
      font-weight: 900;
    }
  }
}
</style>