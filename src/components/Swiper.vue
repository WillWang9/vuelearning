<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="item in banner" :key="item.id">
                <img :src="item.image_url" alt="" @click="go(item.id)" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: "Swiper",
    props: ["banner"],
    data() {
        return {};
    },
    methods: {
        go(a) {
            if (a == 1) {
                a = 1005001;
            } else if (a == 2) {
                a = 1036000;
            } else if (a == 3) {
                a = 1012001;
            } else {
                a = 1008016;
            }

            this.$router.push({
                name: "channel",
                query: {
                    id: a,
                },
            });
        },
    },
    created() {},
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
    img {
        width: 100%;
    }
}
</style>

