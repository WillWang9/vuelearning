<template>
    <div id="root">
        <router-view v-if="$route.path == '/home/search'"></router-view>
        <div v-else>
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                shape="round"
                @click="$router.push({ name: 'searchpage' })"
            />
            <Swiper :banner="bannerData"></Swiper>
            <Grid :channel="channelData"></Grid>
            <Brand :brand="brandData"></Brand>
            <NewRelease :newgoods="newGoodsData"></NewRelease>
            <Recommend :hotgoods="hotGoodsData"></Recommend>
            <TopicChosen :topic="topicData"></TopicChosen>
            <CategoryList :cate="CategoryListData"></CategoryList>
        </div>
    </div>
</template>

<script>
import { getHomeData } from "@/utils/http";

import Swiper from "@/components/Swiper.vue";
import Grid from "@/components/Grid.vue";
import Brand from "@/components/Brand.vue";
import NewRelease from "@/components/NewRelease.vue";
import Recommend from "@/components/Recommend.vue";
import TopicChosen from "@/components/TopicChosen.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
    name: "Home",
    data() {
        return {
            value: "",
            bannerData: [],
            channelData: [],
            brandData: [],
            newGoodsData: [],
            hotGoodsData: [],
            topicData: [],
            CategoryListData: [],
        };
    },
    components: {
        Swiper,
        Grid,
        Brand,
        NewRelease,
        Recommend,
        TopicChosen,
        CategoryList,
    },
    created() {
        getHomeData().then((res) => {
            // console.log(res.data.data.channel);
            this.bannerData = res.data.data.banner;
            this.channelData = res.data.data.channel;
            this.brandData = res.data.data.brandList;
            this.newGoodsData = res.data.data.newGoodsList;
            this.hotGoodsData = res.data.data.hotGoodsList;
            this.topicData = res.data.data.topicList;
            this.CategoryListData = res.data.data.categoryList;
        });
    },
};
</script>

<style scoped>
</style>

<style>
.title {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #000;
}
</style>
