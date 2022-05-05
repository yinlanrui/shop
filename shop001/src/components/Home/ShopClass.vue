<template>
    <div class="shopClass">
        <div class="shopClass-top">
            <div class="color">&nbsp;&nbsp;</div>
            <div class="class">商品分类</div>
        </div>
        <div class="Slist">
            <div class="swiper-container" id="shopSwiper">
                <div class="swiper-wrapper">
                    <div  @click="$router.push({path:'/classify',query:{id:item.id}})"
                                 class="swiper-slide"
                                 v-for="(item,i) in shops.shopsList"
                                 :key="i"
                                >
                        <img :src="shops.url+item.icon" alt="">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.css'
    import Swiper from 'swiper'
    import {reactive,onMounted,onUpdated} from 'vue';
    import {getClass} from "@/api";
    import {mapMutations,mapState} from 'vuex'
    import router from "@/router";
    import {useRoute} from "vue-router";


    export default {
        name: "ShopClass",
        setup(){
            const route = useRoute();
            let shops=reactive({
                shopsList:[], //保存
                url:"http://47.95.13.193/myToiletries",

            });

            onMounted(async()=>{
                let res=await getClass()
                //console.log(res)
                shops.shopsList=res.data.data


            });
            onUpdated(()=>{
                var swiper=new Swiper('#shopSwiper',{
                    slidesPerView:4,
                    spaceBetween:10,
                })
            })
            return {shops}
        }
    }

</script>

<style lang="less" scoped>
    .shopClass{
        width: 7.5rem;
        padding: 0 0.4rem;
        .shopClass-top{
            display: flex;
            justify-content: left;
            height: 1rem;
            align-items: center;
            .color{
                font-size: 0.4rem;
                font-weight: 900;
                width:1%;
                height: 40%;
                background: #aa6be4;
            }
        }
        .Slist{
            .swiper-container{
                width: 100%;
                height: 2rem;
                .swiper-slide{
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 0.1rem;
                    }
                    .name{
                        height: 0.6rem;
                        width: 100%;
                        font-size: 0.24rem;
                        line-height: 0.4rem;
                    }
                    span{
                        text-align: center;
                        background: #8e79ce;
                        color: whitesmoke;
                        border-radius: 0.2rem;
                        display: inline-block;
                    }
                }
            }
        }
    }

</style>