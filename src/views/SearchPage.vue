<template>
    <div class="search">
        <form action="/">
            <van-search
                :autofocus="true"
                shape="round"
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
        <div v-if="!searching">
            <div class="history">
                <div>
                    <p>历史搜索记录</p>
                    <van-icon name="delete-o" @click="clear" />
                </div>
                <van-tag
                    class="tag"
                    plain
                    type="primary"
                    v-for="(item, index) in historyData"
                    :key="index"
                    @click="tagSearch(item)"
                >
                    {{ item }}
                </van-tag>
            </div>
            <div class="hot">
                <p>热门搜索</p>
                <van-tag
                    color="#7232dd"
                    class="tag"
                    plain
                    type="primary"
                    v-for="(item, index) in hotData"
                    :key="index"
                    @click="tagSearch(item.keyword)"
                >
                    {{ item.keyword }}
                </van-tag>
            </div>
        </div>
        <div v-else>
            <SearchResult
                :filterCategory="filterCategory"
                @sendcate="changeCate"
                @sendprice="changeOrder"
            ></SearchResult>

            <SearchGoodsList
                :goodsList="goodsList"
                :count="count"
            ></SearchGoodsList>
        </div>
    </div>
</template>

<script>
import { getSearchData, clearHistory, search } from "@/utils/http";
import SearchResult from "@/components/SearchResult.vue";
import SearchGoodsList from "@/components/SearchGoodsList.vue";

export default {
    name: "SearchPage",
    data() {
        return {
            value: "",
            historyData: [],
            hotData: [],
            onTimeData: [],
            searching: false,
            filterCategory: [],
            goodsList: [],
            order: "desc",
            categoryId: 0,
            sort: "id", // 排序方式 根据分类id 还是价格price
            page: 1,
            size: 240,
            count: "",
        };
    },
    components: { SearchResult, SearchGoodsList },
    methods: {
        tagSearch(item) {
            this.value = item;
            this.onSearch();
        },
        clear() {
            clearHistory().then((res) => {
                console.log(res);
                this.historyData = res.data.data;
            });
            this.$toast.success("清除成功");
        },
        onCancel() {
            this.$router.go(-1);
        },
        onSearch() {
            this.searchData();
            this.searching = true;
        },
        searchData() {
            let params = {
                keyword: this.value,
                page: this.page, // 默认页数
                size: this.size, // 每页数据的条数
                order: this.order, // desc 由高到低  asc 由低到高
                categoryId: this.categoryId, // 商品类别id  全部 居家 服装  配件 ....
                sort: this.sort, // 排序方式 根据分类id 还是价格price
            };
            search(params).then((res) => {
                // console.log(res.data.data);
                this.goodsList = res.data.data.goodsList;
                this.filterCategory = res.data.data.filterCategory;
                this.count = res.data.data.count;
            });
        },

        getData() {
            getSearchData().then((res) => {
                // console.log(res.data.data);
                this.historyData = res.data.data.historyKeywordList;
                this.hotData = res.data.data.hotKeywordList;
            });
        },
        changeCate(value) {
            // console.log(value);
            this.categoryId = value;
            this.sort = "id";
            this.searchData();
        },
        changeOrder(value) {
            // console.log(value);
            this.order = value;
            this.sort = "price";
            this.searchData();
        },
    },
    created() {
        this.getData();
    },
    updated() {},
};
</script>

<style lang="less" scoped>
.history,
.hot {
    padding: 15px;
    p {
        font-size: 16px;
    }
    .tag {
        margin-right: 3px;
    }
    div {
        display: flex;
        justify-content: space-between;
        i {
            font-size: 20px;
        }
    }
}
</style>