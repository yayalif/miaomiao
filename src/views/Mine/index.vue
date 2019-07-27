<template>
<div class="mine">
    <Header title="我的电影" ></Header>
    <login></login>
    <tab-bar></tab-bar>
</div>

</template>

<script>
import Header from '@/components/header'
import TabBar from '@/components/TabBar'
import login from '@/components/Login'

export default {
    name:'Mine',
    components:{
        Header,
        TabBar,
        login
    }

}
</script>

<style>

</style>
