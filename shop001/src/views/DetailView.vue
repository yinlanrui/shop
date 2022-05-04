<template>
    <goodsNav :detail="shops.detail" ></goodsNav>
    <goodsShow :detail="shops.detail" :url="shops.url"></goodsShow>
    <goodsInform :detail="shops.detail"></goodsInform>

</template>

<script>
    import ShopDetail from "@/components/Detail/ShopDetail.vue";
    import goodsInform from "@/components/Detail/goodsInform.vue";
    import goodsNav from "@/components/Detail/goodsNav.vue";
    import goodsShow from "@/components/Detail/goodsShow.vue";
    import {useRoute} from 'vue-router'
    import {onMounted,reactive} from 'vue'
    import store from '@/store/index.js'
    import {getShopDetail} from "@/api/index.js";
    export default {
        name: "Detail",

        setup(){
            const route = useRoute();
            let shops=reactive({
                detail:{
                    data:{
                        categoryName:{},
                        effectList:[
                            {},
                            {},
                            {},
                        ],
                        info:{},
                        name:{},
                        photo:{},
                        price:{},
                    },
                },
                url: "http://47.95.13.193/myToiletries",
            })

            onMounted(async ()=>{
                //console.log(route)
                let id=route.query.id
                console.log(id)
                let res=await getShopDetail(id);
                console.log(res)
                shops.detail=res.data
                console.log(shops.detail.data.photo)
            })
            return {shops}
        },
        components:{
            ShopDetail,goodsNav,goodsShow,goodsInform
        },

    }
</script>

<style scoped>

</style>