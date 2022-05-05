<template>
    <SearchTop></SearchTop>
    <classifyTop :msg="value" ref="thisSon"></classifyTop>
    <classifyButtom :msg="value" ref="isSon" ></classifyButtom>
</template>

<script>
    import SearchTop from "@/components/Home/SearchTop.vue";
    import classifyTop from "@/components/Classify/classifyTop.vue";
    import classifyButtom from "@/components/Classify/classifyButtom.vue";
    import {useRoute} from 'vue-router'


    export default {
        name: "Classify",
        data() {
            return {
                value:'1',
            }
        },
        props:['changeHighLight'],
        components:{
            classifyTop,classifyButtom,SearchTop
        },
        methods:{
            fatherMethod(int) {
                // console.log(int);
                this.value=int;
                this.$refs.isSon.created(int);
            },
        },
        mounted(){
            const route = useRoute();
            console.log(route.query.id)
            //this.value=route.query.id
            this.$refs.isSon.created(route.query.id)
            this.$refs.thisSon.change(route.query.id-1)  
        }
    }
</script>

<style scoped>

</style>