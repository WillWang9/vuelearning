<template>
    <div>
        <van-grid :column-num="5">
            <van-grid-item
                v-for="item in channel"
                :key="item.id"
                :icon="item.icon_url"
                :text="item.name"
                @click="goChannel(item.id)"
            />
        </van-grid>
    </div>
</template>

<script>
export default {
    name: "Grid",
    props: ["channel"],

    data() {
        return {};
    },
    components: {},
    methods: {
        goChannel(a) {
            // console.log(a);
            this.$router.push({
                name: "channel",
                query: {
                    id: a,
                },
            });
        },
    },
};
</script>

<style lang="less" scoped>
</style>