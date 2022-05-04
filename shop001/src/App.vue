<template>
    <div class="app">
        <router-view/>
        <Fragment></Fragment>
    </div>

</template>

<script>
    import Fragment from "@/components/Fragment.vue";
    export default {
        components:{
            Fragment
        }
    }

</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 微软雅黑;
  }

  .icon{
    width: 0.3rem;
    height: 0.3rem;
  }
    .app{
        background: #e2dede;
    }

</style>
