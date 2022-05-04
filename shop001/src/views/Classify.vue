<template>
    <SearchTop></SearchTop>
    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <div class="classifytop">
        <div class="classifytop-nav" >
            <div
                    class="navBtn"
                    v-for="(item, index) in queryAllCategory.result"
                    :key="index"
                    @click="change(index)"
                    :class="{'active': index == highLight}"
            >
                {{ item.name }}
            </div>
        </div>
    </div>
    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <div class="classifybttom">
        <div class="classifybttom-nav">
            <div class="nav"
                 v-for="(item, index) in queryCommodityByCateId.result"
                 :key="index"
            >
                <img class="mav-img" :src="'http://47.95.13.193/myToiletries' + item.photo" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
    import SearchTop from "@/components/Home/SearchTop";
    import { getClassify } from "@/api/index";
    import { getBann } from "@/api/index";

    export default {
        name: "Classify",
        components: {
            SearchTop ,
        },
        data() {
            return {
                highLight:0,
                id:1,
                queryAllCategory: {
                    result: [],
                },
                queryCommodityByCateId: {
                    result: [],
                },
            };
        },
        async created() {
            let res = await getClassify();
            console.log(res.data.data);
            this.queryAllCategory.result = res.data.data;
        },
        async beforeUpdate() {
            let res = await getBann(this.id);
            // console.log(res.data.data);
            this.queryCommodityByCateId.result = res.data.data;
        },
        methods: {
            change(value) {
                console.log(value+1);
                this.id=value+1
                this.highLight=value
            },
        },
    };
</script>

<style lang="less" scoped>
    .classifytop {
        width: 7.5rem;
        height: 3rem;
        background: white;
        .classifytop-nav {
            width: 7rem;
            height: 100%;
            margin: 0 auto;
            .navBtn {
                display: inline-block;
                width: 1.75rem;
                height: 33%;
                text-align: center;
                line-height: 1rem;
            }
            .active{
                color: #8E79CE;
                border-bottom: 0.03rem solid #8E79CE;
            }
        }
    }
    .classifybttom {
        margin-top: 0.7rem;
        width: 7.5rem;
        height: 7rem;
        .classifybttom-nav{
            width: 7rem;
            margin: 0 auto;
            .nav{
                display: inline-block;
                margin-left: 0.1rem;
                margin-bottom: 0.1rem;
                width: 3.3rem;
                height: 3.3rem;
                line-height: 1rem;
                border-radius: 0.1rem;
                .mav-img{
                    width: 3.3rem;
                    height: 3.3rem;
                }
            }
        }
    }
</style>
