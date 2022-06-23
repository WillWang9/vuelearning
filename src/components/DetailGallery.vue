<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in gallery" :key="item.id">
                <img :src="item.img_url" alt="" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: "DetailGallery",
    props: ["gallery"],
    data() {
        return {};
    },
    components: {},
    created() {},
};
</script>

<style lang="less" scoped>
img {
    width: 100%;
}
</style>