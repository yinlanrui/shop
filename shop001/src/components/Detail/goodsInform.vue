<template>
  <div>
    <div class="goodsInform">
      <div class="inform-top">
        <p>{{detail.data.name}}</p>
        <p class="xingshi">{{detail.data.info}}</p>
        <p class="xingshi2">￥{{detail.data.price}}</p>
        <div class="insure">
          <div class="insureC">
            <div class="circle"></div>
            <p>满100包邮</p>
          </div>
          <div class="insureC">
            <div class="circle"></div>
            <p>15天无理由退</p>
          </div>
          <div class="insureC">
            <div class="circle"></div>
            <p>假一罚10</p>
          </div>
        </div>
      </div>
      <div class="inform-center">
        <div class="effect">
          <div>功效:</div>
          <div id="xingshi3">{{detail.data.effectList[0].name}}</div>
          <div>{{detail.data.effectList[1].name}}</div>
        </div>
        <div id="chui">购买数量:</div>
        <div class="count">
          <button @click="add">+</button>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <span>{{ count }}</span>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button @click="sub">-</button>
        </div>
      </div>
      <div class="inform-bottom">
        <div class="effect">
          <div>配送:</div>
          <div>上海</div>
          <div>中山北路</div>
        </div>
      </div>
      <div class="goodsBottom">
        <div class="zixun">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-0_kefuzhongxin"></use>
          </svg>
          <br />
          <span>客服</span>
        </div>
        <div class="zixun">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <br />
          <span>收藏</span>
        </div>
        <div class="pay">
          <span>加入购物车</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "goodsInform",
  props:['detail'],
  data: function () {
    return {
      count: 1,
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    sub: function () {
      if (this.count <= 1) {
        this.count = 1;
      } else {
        this.count--;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.goodsInform {
  width: 7.5rem;
  height: 8rem;
  background: #f8f7f7e5;
  position: relative;
}
.goodsInform > .inform-top {
  width: 100%;
  height: 2.8rem;
  // background: rgb(0, 234, 255);
  border-top: solid 0.1rem rgba(245, 243, 243, 0.904);
  position: relative;
  background: #fff;
}
.inform-top > p {
  margin-left: 0.3rem;
  margin-top: 0.1rem;
}
.xingshi {
  color: rgb(161, 161, 161);
  font-size: 12px;
}
.xingshi2 {
  color: rgb(244, 11, 11);
  font-size: 18px;
  font-weight: bolder;
}
.insure {
  width: 100%;
  height: 0.81rem;
  position: absolute;
  bottom: 0;
  // background: red;
  display: flex;
  // justify-content: space-around;
  align-items: center;
}
.insure > .insureC {
  width: 2.4rem;
  height: 0.5rem;
  // background: greenyellow;
  position: relative;
  margin-left: 0.2rem;
}
.insure > .insureC > .circle {
  width: 0.4rem;
  height: 0.4rem;
  // background: blue;
  border: 0.05rem solid red;
  border-radius: 50%;
}
.insureC > p {
  position: absolute;
  top: 0;
  left: 0.4rem;
  color: rgb(161, 161, 161);
  font-size: 8px;
}
.goodsInform > .inform-center {
  width: 100%;
  height: 2.5rem;
  // background: rgb(0, 217, 255);
  border-top: solid 0.1rem rgba(245, 243, 243, 0.904);
  position: relative;
  background: #fff;
}
.effect {
  width: 5rem;
  height: 0.6rem;
  // background: red;
  display: flex;
}
.effect > div {
  width: 1.2rem;
  height: 0.6rem;
  // background: greenyellow;
  text-align: center;
  line-height: 0.6rem;
}
#xingshi3 {
  border: 0.05rem solid red;
  line-height: 0.5rem;
  color: red;
}
#chui {
  width: 0.3rem;
  margin-left: .3rem;
  // background: greenyellow;
}
.count {
  width: 6rem;
  height: 1rem;
  // background: greenyellow;
  position: absolute;
  top: 0.7rem;
  left: 1rem;
}
.goodsInform > .inform-bottom {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  border-top:.05rem solid rgba(245, 243, 243, 0.904) ;
}
.goodsBottom {
  width: 7.5rem;
  height: 1rem;
  background: #fff;
  position: absolute;
  bottom: 0;
}
.zixun {
  width: 1rem;
  display: inline-block;
  margin-left: 0.2rem;
  text-align: center;
}
svg {
  width: 0.5rem;
  height: 0.5rem;
}
.pay {
  background: orange;
  color: #fff;
  width: 5.1rem;
  height: 1rem;
  display: inline-block;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 1rem;
}
</style>
