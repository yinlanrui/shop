<template>
    <div class="shopHot">
        <div class="shopHot-top">
            <div class="color">&nbsp;&nbsp;</div>
            <div class="production">热门商品</div>
        </div>
        <div class="hotList">
            <div class="swiper-container" v-for="(item,i) in shops.shopsList" :key="i">
                    <div @click="$router.push({path:'/detail',query:{id:item.id}})" class="router-link-active">
                        <img :src="shops.url+item.photo" alt="">
                        <div class="swiper-detail">
                            <div class="title">{{item.name}}</div>
                            <p>{{item.info}}</p>
                            <span>购买</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    import {reactive, onMounted, onUpdated} from 'vue'
    import {getHot} from "@/api";

    export default {
        name: "ShopHot",
        setup() {
            let shops = reactive({
                shopsList: [], //保存
                url: "http://47.95.13.193/myToiletries",

            });
            onMounted(async () => {
                let res = await getHot()
                // console.log(res)
                shops.shopsList = res.data.data
                //console.log(shops.shopsList)
            });
            onUpdated(() => {

            })
            return {shops}
        }
    }
</script>

<style lang="less" scoped>
    .shopHot {
        width: 7.5rem;
        padding: 0 0.4rem;

        .shopHot-top {
            display: flex;
            justify-content: left;
            height: 1rem;
            align-items: center;

            .color {
                font-size: 0.4rem;
                font-weight: 900;
                width: 1%;
                height: 40%;
                background: #aa6be4;
            }
        }

        .hotList {
            .swiper-container {
                width: 100%;
                height: 2rem;
                margin-bottom: 0.3rem;
                .router-link-active{
                    display: flex;
                    justify-content: left;
                    /*background: #aa6be4;*/
                    img {
                        width: 30%;
                        height: 100%;
                    }
                    .swiper-detail {
                        width: 70%;
                        text-decoration: none;
                        background: whitesmoke;
                        .title{
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            word-wrap: break-word;
                            font-size: 0.3rem;
                            font-weight: 900;
                            color: #000;
                            margin-bottom: 0.1rem;
                        }
                        p{
                            word-break: break-all;
                            word-wrap: break-word;
                            font-size: 0.1rem;
                            font-weight: 900;
                            color: #a3a3a3;
                        }
                        span{
                            display: inline-block;
                            width: 1rem;
                            bottom: 0;
                            text-align: center;
                            background: #8e79ce;
                            border-radius: 0.1rem;
                            color: whitesmoke;
                        }
                    }
                }
            }
        }

    }

</style>