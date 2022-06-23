<template>
    <div class="recommend">
        <h3 class="title">人气推荐</h3>

        <van-card
            v-for="item in hotgoods"
            :key="item.id"
            :thumb="item.list_pic_url"
            @click="detail(item)"
        >
            <template #title>
                <p>{{ item.name }}</p>
            </template>
            <template #desc>
                <span>{{ item.goods_brief }}</span>
            </template>
            <template #bottom>
                <i>{{ item.retail_price | formatPrice }}</i>
            </template>
        </van-card>
    </div>
</template>

<script>
export default {
    name: "Recommend",
    props: ["hotgoods"],
    data() {
        return {};
    },
    components: {},
    methods: {
        detail(item) {
            this.$router.push({
                name: "detail",
                query: { id: item.id },
            });
        },
    },
};
</script>

<style lang="less" scoped>
h3 {
    font-size: 20px;
}

p {
    font-size: 18px;
    line-height: 29px;
    font-weight: 500;
}

span {
    line-height: 40px;
}

i {
    color: #8b0000;
}

.recommend {
    margin-top: 10px;
}
</style>
