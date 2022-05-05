<template>
    <!--    <h2>{{msg}}</h2>-->
    <div class="buttom">
        <div class="center">
            <div class="graphic"  v-for="(item,index) in textImg" :key="index"  @click="$router.push({path:'/detail',query:{id:item.id}})">
                <img :src="'http://47.95.13.193/myToiletries'+item.photo" alt="" >
                <div class="text" >
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAllClassify} from "@/api/index"

    export default {
        name: "classifyButtom",
        props:['msg'],


        data(){
            return{
                textImg: [],
            }
        },
        async created(i){
            console.log(this.msg);
            let res=await getAllClassify(this.msg);
            console.log(res.data.data);
            this.textImg=res.data.data;
            //console.log(this.textImg)
        },
        methods:{
            async created(int){
                console.log(int);
                let res=await getAllClassify(int);
                console.log(res.data.data);
                this.textImg=res.data.data;
            },
        }
    }
</script>

<style scoped lang="less">
    .buttom{
        width: 7.5rem;
        /*height: 10rem;*/
        background:#e2e2e2;
    }
    .center{
        width: 7.0rem;
        /*height: 10rem;*/
        background: #e2dede;
        margin: 0 auto;
        margin-top: 0.5rem;

    }
    .center>.graphic{
        width: 3.45rem;
        height: 3.2rem;
        background: #4BB344;
        display: inline-block; //绝妙的inline-block
        position: relative;
    }
    .center>.graphic:nth-child(odd){
        margin-right: 0.1rem;
    }
    .center>.graphic>img{
        width: 100%;
        height: 100%;
    }
    .center>.graphic>.text{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        margin-top: 2.3rem;

    }
    .center>.graphic>.text>span{
        background: #8E79CE;
        color:#ffffff;
        display: inline-block;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 0.2rem;

    }


</style>