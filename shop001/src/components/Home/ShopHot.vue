<template>
    <div class="shopHot">
        <div class="shopHot-top">
            <div class="color">&nbsp;&nbsp;</div>
            <div class="production">热门商品</div>
        </div>
        <div class="hotList">
            <div class="swiper-container" id="shopSwiper">
                <div class="swiper-wrapper">
                    <router-link :to="{path:'/detail',query:{id:item.id}}"  class="swiper-slide" v-for="(item,i) in shops.shopsList" :key="i" >
                        <img src="" alt="">
                        <div class="swiper-detail">
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.css'
    import Swiper from "swiper";
    import {reactive,onMounted,onUpdated} from 'vue'
    import {getClass, getHot} from "@/api";

    export default {
        name: "ShopHot",
        setup() {
            let shops = reactive({
                shopsList: [], //保存
                url: "http://47.95.13.193/myToiletries",

            });
            onMounted(async () => {
                let res = await getHot()
                console.log(res)
                shops.shopsList = res.data.data
                console.log(shops.shopsList)

            });
            onUpdated(() => {
                var swiper = new Swiper('#shopSwiper', {
                    slidesPerView: 4,
                    spaceBetween: 10,
                })
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
                background: #08acee;
            }
        }
        .hotList{
            height: 2rem;
            .swiper-container{
                height: 100%;
                .swiper-wrapper{
                    height: 100%;
                    background: #08acee;
                    .swiper-slide{
                        display: flex;
                        justify-content: left;
                        img{
                            width: 30%;
                            background: #51e091;
                        }
                        .swiper-detail{
                            width: 70%;
                        }
                    }
                }
            }
        }

    }

</style>