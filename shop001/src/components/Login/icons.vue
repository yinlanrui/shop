<template>
  <div class="iconList">
    <div class="username">
      <label for="username">
        <img class="i" src="../../assets/img/login_02.png" alt="" />
      </label>
      <input
        class="txtUsername"
        type="text"
        placeholder="用户名/手机号"
        maxlength="20"
      />
    </div>
    <div class="password">
      <label for="userword">
        <img class="z" src="../../assets/img/login_03.png" alt="" />
      </label>
      <input
        class="txtPassword"
        type="password"
        placeholder="密码"
        maxlength="20"
      />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .txtUsername {
    width: 9rem;
    height: 0.55rem;
    border: none;
    outline: none;
    font-size: 0.32rem;
    margin-top: -0.2rem;
  }
  .password,
  .username {
    width: 5.62rem;
    border-bottom: 1px solid #ababab;
    display: flex;
    padding-bottom: -2rem;
    align-items: flex-end;
    margin-top: -1rem;

    .i {
      width: 0.38rem;
      height: 0.44rem;
      margin-right: 0.28rem;
    }
    .txtPassword {
      width: 9rem;
      height: 0.55rem;
      border: none;
      outline: none;
      font-size: 0.32rem;
      margin-top: 1.3rem;
    }
    .z {
      width: 0.33rem;
      height: 0.4rem;
      margin-right: 0.28rem;
    }
  }
}
.username {
  z-index: 9;
}
</style>