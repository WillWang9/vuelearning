<template>
    <div>
        <van-grid :column-num="5">
            <van-grid-item v-for="item in channel" :key="item.id" :icon="item.icon_url" :text="item.name" />
        </van-grid>
    </div>
</template>

<script>

export default {
    name: "Grid",
    props: ['channel'],

    data() {
        return {

        };
    },
    components: {

    },
};
</script>

<style lang="less" scoped>
</style>