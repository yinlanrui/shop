<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in images" :key="i">

                    <img :src="item.pic" alt="">
                </div>
            </div>
            //分页器
            <div class="swiper-pagination">

            </div>
            <!--   &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;
               <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>

               &lt;!&ndash; 如果需要滚动条 &ndash;&gt;
               <div class="swiper-scrollbar"></div>-->
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.css'
    import Swiper from 'swiper'
    export default {
        name: "Swiper",
        data(){
            return{
                images:[
                    {pic:require('../../assets/img/banner1.jpg')},
                    {pic:require('../../assets/img/banner2.jpg')},
                    {pic:require('../../assets/img/banner3.jpg')},

                ]
            }
        },
        mounted() {
            var mySwiper=new Swiper('#swiperIndex',{

                loop:true,//循环模式
                autoplay:true,//是否为自动切换
                speed:1000,//speed的切换所需要时间单位毫秒
                //配置分页器内容
                pagination:{
                    el:".swiper-pagination",//分页器与哪个标签关联
                    clickable:true//分页器是否可以点击
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },

            })
        },

    }
</script>

<style lang="less">
    #swipercom{
        width: 7.5rem;
        #swiperIndex.swiper-container{
            width: 7.1rem;
            height: 2.6rem;
            border-radius: 0.1rem;

            .swiper-slide img{
                width: 100%;
            }
            .swiper-pagination-bullet-active{
                background-color: orangered;
            }

        }
    }
</style>