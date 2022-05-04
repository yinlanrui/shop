<template>
    <div class="search">
        <div class="searchLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
        <router-link :to="{path:'/search'}" class="searchMiddle">
            <input class="input" type="text">
        </router-link>
        <div class="searchRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style lang="less" scoped>
    .search{
        width: 7.5rem;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        align-items: center;
        background: #aa6be4;

        .icon{
            width: 0.5rem;
            height: 0.5rem;
        }
        .searchLeft{

        }
        .searchMiddle{
            width: 4.5rem;
            height: 0.6rem;
            background: #aa6be4;
            .input{
                width: 100%;
                height: 100%;
            }
        }
    }

</style>