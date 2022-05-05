<template>
    <div class="classifytop">
        <div class="topCenter" >
            <span class="navBtn " :class="{'active': index == highLight}" v-for="(item,index) in text  "
                  :key="index"
                  :changeHighLight="changeHighLight"
                  @click="changeHighLight(index)">
                {{ item.name }}
            </span>
        </div>
    </div>



</template>

<script>
    import {getClassify} from "@/api/index";
    export default {
        name: "classifytop",
        props:['msg'],

        data(){
            return{
                text: [
                ],
                highLight: 0,
            }
        },
        async created(){
            let res=await getClassify();
            console.log(res.data)
            this.text=res.data.data;
        },
        methods: {
            change(int){
                console.log(int);
                this.highLight=int;
                // console.log(this.highLight)     //索引值小一位
                // this.$parent.fatherMethod(int);  //子组件调用父组件中的方法
            },
            changeHighLight(index) {
                // console.log(this.text[index].id)
                this.highLight = index;
                console.log(this.highLight)     //索引值小一位
                this.$parent.fatherMethod(this.text[index].id);  //子组件调用父组件中的方法
            },

        },
    }

</script>

<style lang="less" scoped>
    .classifytop{
        width: 7.5rem;
        height: 3rem;
        background: #ffffff;

    }
    .classifytop>.topCenter{
        width: 7rem;
        height: 100%;
        background: #ffffff;
        margin: 0 auto;
        /*display: flex;*/
        /*justify-content: space-around;*/
    }
    .classifytop>.topCenter>.navBtn{
        display: inline-block;
        width: 1.75rem;
        height: 33%;
        text-align: center;
        line-height: 1rem;

    }
    .classifytop>.topCenter>.active{
        color: #8E79CE;
        border-bottom: 0.03rem solid #8E79CE;
    }



</style>