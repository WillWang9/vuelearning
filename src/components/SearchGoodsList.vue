<template>
    <div>
        <ul>
            <li v-for="item in goodsList" :key="item.id" @click="detail(item)">
                <img v-lazy="item.list_pic_url" alt="" />
                <p>{{ item.name }}</p>
                <span>{{ item.retail_price | formatPrice }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { goodsDetail } from "@/utils/http";
export default {
    name: "SearchGoodsList",
    props: ["goodsList"],
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
ul {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
        width: 48%;
        p {
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        span {
            font-size: 14px;
            color: #8b0000;
        }
        img {
            width: 100%;
        }
    }
}
</style>