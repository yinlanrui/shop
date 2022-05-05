<template>
  <div class="choose">
    <ul>
      <li>
        <img src="../../assets/img/user_06.png" alt="" />
        <p>历史记录</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>
      <li id="addres">
        <img src="../../assets/img/user_07.png" alt="" />
        <p>地址管理</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>

      <li>
        <img src="../../assets/img/user_08.png" alt="" />
        <p>修改资料</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>

      <li>
        <img src="../../assets/img/user_09.png" alt="" />
        <p>邀请好友</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>

      <li>
        <img src="../../assets/img/user_10.png" alt="" />
        <p>意见反馈</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>

      <li>
        <img src="../../assets/img/user_11.png" alt="" />
        <p>设置</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>

      <li>
        <p id="tuichu">清除缓存</p>
        <img src="../../assets/img/user_12.png" alt="" class="pic" />
      </li>
    </ul>
  </div>
</template>

<script>
</script>
<style lang="less" scoped>
.choose li {
  width: 7.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0.26rem 0.24rem;
  margin-bottom: 0.02rem;
  position: relative;
}

.choose li img {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.28rem;
}

.choose li p {
  font-size: 0.3rem;
  color: rgb(51, 51, 51);
}

.choose li:nth-child(3n) {
  margin-bottom: 0.16rem;
}

.choose li:last-child {
  font-size: 0.3rem;
  display: flex;
  padding-top: 0.23rem;
  padding-bottom: 0.23rem;
  justify-content: center;
  margin-bottom: 0.02rem;
}

.choose .pic {
  position: absolute;
  width: 0.22rem;
  height: 0.44rem;
  top: 50%;
  margin-top: -0.22rem;
  right: 0.22rem;
  margin-right: 0;
}
ul {
  width: 7.5rem;
  padding-top: 0.15rem;
  background: #cfcfcf;
  padding-bottom: 0.04rem;
}
</style>