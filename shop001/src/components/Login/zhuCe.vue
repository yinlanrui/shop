<template>
  <div>
    <button class="loginbtn">登录</button>
    <div class="help">
      <a href="#">忘记密码</a>
      <a href="#">注册账号</a>
    </div>
    <div id="footer">
      <div class="title">其他方式</div>
      <div class="mode">
        <ul>
          <li><img src="../../assets/img/login_05.png" alt="" /></li>
          <li><img src="../../assets/img/login_06.png" alt="" /></li>
          <li><img src="../../assets/img/login_07.png" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="less" scoped>
button {
  width: 5.62rem;
  background: #8e79ce;
  border: 0;
  outline: none;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  line-height: 0.8rem;
}
.help {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.help a {
  color: #a3a3a3;
  text-decoration: none;
  font-size: 0.24rem;
  margin-top: 0.24rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.footer {
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  flex-direction: column;
}
.title {
  width: 4.2rem;
  height: 0.24rem;
  background: url("../../assets/img/login_04.png") no-repeat center;
  background-size: 4.2rem 0.22rem;
  text-align: center;
  font-size: 0.24rem;
  line-height: 0.24rem;
  color: rgb(153, 153, 153);
  margin-left: 1.55rem;
  position: relative;
  top: 2rem;
}

.mode {
  width: 3.5rem;
}

.mode ul {
  display: flex;
  justify-content: space-between;
  margin-top: 2.75rem;
  position: relative;
  left: 2rem;
}

.mode ul li {
  font-size: 0.24rem;
  color: rgb(153, 153, 153);
  display: flex;
  align-items: center;
}
.mode ul li img {
  margin-right: 0.18rem;
}
.mode ul li:nth-child(1) img {
  width: 0.44rem;
  height: 0.36rem;
}
.mode ul li:nth-child(2) img {
  width: 0.48rem;
  height: 0.44rem;
}
.mode ul li:nth-child(3) img {
  width: 0.42rem;
  height: 0.36rem;
}
</style>