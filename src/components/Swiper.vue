<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">

            <van-swipe-item v-for="item in banner" :key="item.id">
                <img :src="item.image_url" alt="">
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script>
export default {
    name: "Swiper",
    props: ['banner'],
    data() {
        return {

        };
    },
    created() {
        // setTimeout(() => {
        //     console.log(this.banner);
        // }, 1000);
    },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
    img {
        width: 100%;
    }
}
</style>