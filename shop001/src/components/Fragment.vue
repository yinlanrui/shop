<template>
    <div class="Fragment">
        <div @click="$router.push('/')">
            <img src="../assets/img/homepage1.png" alt="">
            <span>主页</span>
        </div>
        <div @click="$router.push('/classify')">
            <img src="../assets/img/yyb_fenlei2.png" alt="">
            <span>分类</span>
        </div>
        <div>
            <img src="../assets/img/find.png" alt="">
            <span>发现</span>
        </div>
        <div>
            <img src="../assets/img/shopCar.png" alt="">
            <span>购物车</span>
        </div>
        <div>
            <img src="../assets/img/person.png" alt="">
            <span>个人中心</span>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Fragment"
    }
</script>

<style lang="less" scoped>
    .Fragment {
        width: 7.5rem;
        height: 1.2rem;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ccc;
        background: #8E79CE;
        z-index: 1;
        padding: 0.2rem;
        div{
            display: flex;
            flex-direction: column;
            img {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 0.4rem;
            }
            span{
                font-size: 0.2rem;
                color: #6f6f6f;
                text-align: center;
            }
        }


    }


</style>