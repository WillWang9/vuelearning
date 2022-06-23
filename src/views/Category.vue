<template>
    <div>
        <!-- 搜索框 -->
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            shape="round"
            @click="$router.push({ name: 'searchpage' })"
        />
        <!-- 搜索框下方 主要内容 -->
        <div class="content">
            <!-- 内容区左侧菜单栏 -->
            <van-sidebar v-model="activeKey">
                <van-sidebar-item
                    v-for="item in dataArr"
                    :key="item.id"
                    :title="item.name"
                    @click="onChange(item)"
                />
            </van-sidebar>

            <!-- 内容区右侧内容区 -->
            <div class="right">
                <div class="pic" @click="imgGoChannel">
                    <img v-lazy="currentData.banner_url" alt="" />
                    <h5>{{ currentData.front_desc }}</h5>
                </div>

                <van-divider>{{ currentData.name }}</van-divider>

                <van-grid :column-num="3" :border="false">
                    <van-grid-item
                        v-for="item in currentData.subCategoryList"
                        :key="item.id"
                        :icon="item.wap_banner_url"
                        :text="item.name"
                        @click="subGoChannel(item)"
                    />
                </van-grid>
            </div>
        </div>
    </div>
</template>

<script>
import { getCategoryData, getCurrentCategoryData } from "@/utils/http";

export default {
    name: "Category",
    data() {
        return {
            value: "",
            activeKey: 0,
            dataArr: [],
            currentData: "",
            subCategoryList: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        imgGoChannel() {
            this.$router.push({
                name: "channel",
                query: {
                    id: this.currentData.id,
                },
            });
        },
        onChange(item) {
            getCurrentCategoryData({ id: item.id })
                .then((res) => {
                    this.currentData = res.data.data.currentCategory;
                    // console.log(res.data.data.currentCategory);
                })
                .catch();
        },
        getData() {
            getCategoryData()
                .then((res) => {
                    // console.log(res.data.data);
                    this.dataArr = res.data.data.categoryList;
                    this.currentData = res.data.data.currentCategory;
                })
                .catch();
        },
        subGoChannel(item) {
            // console.log(item.id);
            this.$router.push({
                name: "channel",
                query: {
                    id: item.id,
                },
            });
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    display: flex;
    height: 91.9vh;
    margin-bottom: -50px;
    .van-sidebar {
        width: 20%;
        background-color: #f7f8fa;
        height: 100%;
    }

    .right {
        flex: 1;

        .van-divider {
            font-size: 16px;
            color: #000;
        }
        .pic {
            position: relative;
            img {
                width: 95%;
                height: 140px;
                margin: 0 0.18667rem;
                border-radius: 0.13333rem;
                box-shadow: 0 0 0.16rem #000;
                filter: brightness(0.5);
            }
            h5 {
                text-align: center;
                width: 100%;
                color: #fff;
                position: absolute;
                top: 53%;
                left: 0;
                z-index: 222;
                font-size: 16px;
            }
        }
    }
}
</style>