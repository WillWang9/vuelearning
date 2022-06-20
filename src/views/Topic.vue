<template>
    <div id="topicroot">
        <div class="topic" v-for="item in topicData" :key="item.id">
            <img v-lazy="item.scene_pic_url" alt="">
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="price">{{ item.price_info | formatPrice }}起</div>
        </div>
        <van-pagination v-model="page" :page-count="totalPages" mode="simple" @change="pageFn" />
    </div>
</template>

<script>
import { getTopicData } from '@/utils/http';
export default {
    name: "Topic",
    data() {
        return {
            topicData: [],
            page: 1,
            totalPages: 0
        };
    },
    created() {
        this.dataFn()
    },
    methods: {
        pageFn() {
            // console.log(this.page);
            //点击调用获取数据函数 this.page为vmodel绑定的数字 所以实现翻页功能
            this.dataFn();
            //翻页后滑动到页面顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'  // 平滑滚动
            })
        },
        dataFn() {
            getTopicData({
                //传入参数,当前页数,根据vmodel绑定的数字变化
                page: this.page,
                size: 7
            }).then((res) => {
                //声明获取到的数据中的商品列表, 现在的page, 总page
                const { data, currentPage, totalPages } = res.data.data;
                this.topicData = data
                this.page = currentPage
                this.totalPages = totalPages
            })
        }
    },
};
</script>

<style lang="less" scoped>
#topicroot {
    padding-bottom: 20px;
}

.topic {
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;

    img {
        width: 100%;
    }
}

.title {
    font-size: 18px;
    margin: 10px 0 10px 0;
}

.subtitle {
    font-size: 16px;
    line-height: 24px;
    margin: 20px 0 20px 0;
}

.price {
    font-size: 16px;
    color: #8B0000;
    line-height: 24px;
    margin-bottom: 10px;
}

/deep/.van-pagination__page-desc {
    display: none;
}

/deep/.van-pagination__item {
    color: #8b0000;
}

/deep/.van-pagination__item--disabled {
    color: #333;
}
</style>