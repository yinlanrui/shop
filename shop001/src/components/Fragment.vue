<template>
    <div class="Fragment">
        <div  @click="$router.push('/'),changecolor02()">
            <img  id="xx1" src=" https://gd-hbimg.huaban.com/a6182172f4d3333926b83fabaece6723d2ed43f812ee-zaOyIU_fw658/format/webp" alt="">
            <span id="x1">主页</span>
        </div>
        <div @click="$router.push('/classify'),changecolor01()">
            <img  id="xx2" src="https://gd-hbimg.huaban.com/0a1a0723165ba4b1bf9f39023bebbc2952b00288177a-2KLxVN_fw658/format/webp" alt="">
            <span id="x2">分类</span>
        </div>
        <div>
            <img src="../assets/img/find.png" alt="">
            <span>发现</span>
        </div>
        <div>
            <img src="../assets/img/shopCar.png" alt="">
            <span>购物车</span>
        </div>
        <div @click="$router.push('/myself'),changecolor03()">
            <img id="xx3" src="https://gd-hbimg.huaban.com/a02ff675b550ea508978460ef13010be0f890481fda-IYRtQK_fw658/format/webp" alt="">
            <span id="x3">个人中心</span>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Fragment",
        methods:{
            changecolor01(){
                document.getElementById("xx1").src=" https://gd-hbimg.huaban.com/25220856de897c9d04465412b8521826945d38091345-u7cqyv_fw658/format/webp";
                document.getElementById("xx2").src="https://gd-hbimg.huaban.com/e7a7c91897fa26b35ed0c51f561b70a65ea40356175c-D60ozt_fw658/format/webp";
                document.getElementById("xx3").src=" https://gd-hbimg.huaban.com/a02ff675b550ea508978460ef13010be0f890481fda-IYRtQK_fw658/format/webp";
                document.getElementById("x1").style.color="#6f6f6f";
                document.getElementById("x2").style.color="rgb(174, 15, 236)";
                document.getElementById("x3").style.color="#6f6f6f";
            },

            changecolor02(){
                document.getElementById("xx1").src="  https://gd-hbimg.huaban.com/a6182172f4d3333926b83fabaece6723d2ed43f812ee-zaOyIU_fw658/format/webp";
                document.getElementById("xx2").src="https://gd-hbimg.huaban.com/0a1a0723165ba4b1bf9f39023bebbc2952b00288177a-2KLxVN_fw658/format/webp";
                document.getElementById("xx3").src=" https://gd-hbimg.huaban.com/a02ff675b550ea508978460ef13010be0f890481fda-IYRtQK_fw658/format/webp";

                document.getElementById("x1").style.color="rgb(174, 15, 236)";
                document.getElementById("x2").style.color="#6f6f6f";
                document.getElementById("x3").style.color="#6f6f6f";
            },
            changecolor03(){
                document.getElementById("xx1").src=" https://gd-hbimg.huaban.com/25220856de897c9d04465412b8521826945d38091345-u7cqyv_fw658/format/webp";
                document.getElementById("xx3").src=" https://gd-hbimg.huaban.com/4cfdaaaef95af4a2627cb91d3ef6f2c3c5273ccb104c-BKalRD_fw658/format/webp";
                document.getElementById("xx2").src="https://gd-hbimg.huaban.com/0a1a0723165ba4b1bf9f39023bebbc2952b00288177a-2KLxVN_fw658/format/webp";
                document.getElementById("x1").style.color="#6f6f6f";
                document.getElementById("x2").style.color="#6f6f6f";
                document.getElementById("x3").style.color="rgb(174, 15, 236)";

            },
        }
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
        background: #e9e9e9;
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
            #x1{
                color: rgb(174, 15, 236);
            }
        }


    }

</style>