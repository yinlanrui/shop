<template>
    <ShopDetail :detail="shops.detail"></ShopDetail>

</template>

<script>
    import ShopDetail from "@/components/Detail/ShopDetail.vue";
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

                }
            })

            onMounted(async ()=>{
                //console.log(route)
                let id=route.query.id
                console.log(id)
                let res=await getShopDetail(id);
                console.log(res)
                shops.detail=res.data
                console.log(shops.detail)
            })
            return {shops}
        },
        components:{
            ShopDetail
        },

    }
</script>

<style scoped>

</style>