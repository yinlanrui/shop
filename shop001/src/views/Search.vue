<template>
    <div class="bg">
        <div class="search">
            <div class="searchLeft" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sdf"></use>
                </svg>
            </div>
            <div class="searchMiddle">
                <input
                        class="input"
                        type="text"
                        v-model="searchKeywork"
                        @keydown.enter="searchSongs"
                        placeholder="护发素"
                />
            </div>
            <div class="searchRight" @click="searchSongs">
                搜索
            </div>
        </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
        <div class="reMen">
            <div class="text">热门搜索</div>
            <div class="reMen-nav">
                <br>
                <div class="tape01">护发平衡液</div>
                <div class="tape01">拉丝发蜡</div>
                <div class="tape01">去屑洗发乳</div>
                <div class="tape01">造型纤维素</div>
                <div class="tape01">润发霜</div>
                <div class="tape01">修复精发油</div>
                <div class="tape01">蛋白修复素</div>
                <div class="tape01">生发烫</div>
            </div>
        </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
        <div v-if="show" class="shangPin" >
            <div class="top">
                <div class="text">商品列表</div>
            </div>
            <div class="shangPin-nav">
                <div class="nav" v-for="(item, i) in result.list" :key="i"  @click="$router.push({path:'/detail',query:{id:item.id}})">
                    <div class="nav-img">
                        <img :src="'http://47.95.13.193/myToiletries' + item.photo" alt="" />
                    </div>
                    <div class="nav-text">
                        {{ item.name }}
                        <div class="text">{{ item.info }}</div>
                        <div class="btn">&nbsp;&nbsp;购买</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else id="point">
        </div>
    </div>
</template>

<script>

    import { getSearch } from "@/api/index.js";
    export default {
        name: "HomeView",
        components: {},
        data() {
            return {
                show:false,
                searchKeywork:'',
                result: {
                    list: [],
                },
            };
        },
        methods: {
            async searchSongs() {
                console.log("用户要搜索" + this.searchKeywork);
                let res = await getSearch(this.searchKeywork);
                console.log("下面输出的是搜索到的相关");
                // console.log(res.data.data);
                let data = res.data.data;
                if(this.searchKeywork==''){
                    this.show=false
                    document.getElementById("point").innerHTML='请先输入内容'
                }else if(data==null){
                    this.show=false
                    document.getElementById("point").innerHTML='搜索不到'
                }
                else{
                    this.show=true
                    this.result.list = data;
                }
            },
        },
    };
</script>

<style lang="less" scoped>
    .bg{
        background: #f0f0f0;
    }
    .search {
        width: 7.5rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        align-items: center;
        background: rgb(156, 98, 179);
        .searchRight{
            width: 1rem;
            height: 0.4rem;
            color: white;
        }
        .icon {
            width: 0.5rem;
            height: 0.5rem;
        }
        .searchMiddle {
            width: 4.5rem;
            height: 0.6rem;
            background: #08acee;
            .input {
                width: 100%;
                height: 100%;
            }
        }
    }
    .reMen{
        width: 7.5rem;
        .text{
            height: 1rem;
            line-height: 0.9rem;
            padding-left: 0.2rem;
        }
        .reMen-nav{
            height: 2.5rem;
            width: 7.5rem;
            background: #ffffff;
            .tape01{
                color: #6e6e6e;
                display: inline-block;
                padding: 0.03rem;
                height: 0.5rem;
                margin: 0.15rem;
                border: 0.02rem solid #8f8f8f;
                border-radius: 0.14rem;
            }
        }
    }
    .shangPin {
        width: 7.5rem;
        padding-left: 0.2rem;
        .top {
            display: flex;
            height: 1rem;
            align-items: center;
        }
        .shangPin-nav {
            display: flex;
            flex-direction: column;

            .nav {
                background: white;
                font-size: 0.2rem;
                width: 7rem;
                height: 2rem;
                border-radius: 0.1rem;
                margin-left: 0.03rem;
                margin-bottom: 0.15rem;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .nav-text {
                width: 4.4rem;
                height: 1.7rem;
                background: rgb(255, 255, 255);
                font-weight: bolder;
                font-size: 0.31rem;
                .text {
                    width: 4rem;
                    height: 0.4rem;
                    font-weight: normal;
                    font-size: 0.1rem;
                    color: rgb(155, 155, 155);
                    overflow: hidden;
                }
                .btn {
                    width: 0.9rem;
                    height: 0.4rem;
                    background: rgb(219, 134, 253);
                    border-radius: 0.07rem;
                    font-size: 0.1rem;
                    color: white;
                }
            }
            .nav-img {
                margin: 0.3rem;
                width: 1.7rem;
                height: 1.7rem;
                background: rgb(224, 157, 250);
                img {
                    width: 1.7rem;
                    height: 1.7rem;
                }
            }
            span {
                font-size: 0.26rem;
            }
        }
    }
</style>