<template>
    <div>
        <div v-for="item in cate" :key="item.id">
            <h3 class="title">{{ item.name }}</h3>
            <ul id="catagoods">
                <li v-for="items in item.goodsList" :key="items.id">
                    <img v-lazy="items.list_pic_url" alt="">
                    <div>{{ items.name }}</div>
                    <p>{{ items.retail_price | formatPrice }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CatgoryList",
    props: ['cate'],
    data() {
        return {

        };
    },
    components: {

    },
};
</script>

<style lang="less" scoped>
#catagoods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
    line-height: 24px;
    word-spacing: -4px;

    li {
        padding-bottom: 10px;
        margin-bottom: 10px;
        width: 49%;
        font-size: 16px;

        img {
            width: 100%;
        }

        p {
            margin-top: 5px;
            color: #8B0000;
        }
    }
}
</style>