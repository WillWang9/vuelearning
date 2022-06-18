<template>
    <div id="root">
        <van-tabbar :route="true" v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeFn">
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="label-o" to="/topic">专题</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/catagory">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "Tabbar",
    data() {
        return {
            active: ''
        };
    },
    methods: {
        changeFn(active) {
            // console.log(active);
            this.active = active
        }
    },
};
</script>

<style lang="less" scoped>

</style>