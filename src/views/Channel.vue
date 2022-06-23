<template>
    <div>
        <van-tabs @click="changeCate" v-model="active">
            <van-tab
                v-for="item in allCategory"
                :title="item.name"
                :key="item.id"
                :animated="true"
            >
                <div class="vtitle">
                    <h2>{{ name }}</h2>
                    <p>{{ frontDesc }}</p>
                </div>
            </van-tab>
        </van-tabs>

        <ul>
            <li v-for="item in goodsList" :key="item.id" @click="detail(item)">
                <img v-lazy="item.list_pic_url" alt="" />
                <p>
                    {{ item.name }}
                </p>
                <span>
                    {{ item.retail_price | formatPrice }}
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import { search, getGoodsCate } from "@/utils/http";
export default {
    name: "Channel",
    data() {
        return {
            active: 0,
            allCategory: [],
            goodsList: [],
            id: "",
            name: "",
            frontDesc: "",
        };
    },
    created() {
        //获取所有分类数据
        getGoodsCate({
            id: this.$route.query.id,
        }).then((res) => {
            // console.log(res);

            let { brotherCategory, currentCategory } = res.data.data;

            this.allCategory = brotherCategory;
            this.currentCategory = currentCategory;
            this.id = currentCategory.id.toString();
            this.name = currentCategory.name;
            this.frontDesc = currentCategory.front_desc;

            this.allCategory.forEach((item, index) => {
                if (this.$route.query.id == item.id) {
                    this.active = index; //  当前选中的类下标
                }
            });
            this.getCateData(this.id);
        });
    },
    methods: {
        detail(item) {
            this.$router.push({
                name: "detail",
                query: { id: item.id },
            });
        },
        changeCate(index, title) {
            // console.log(index, title);

            this.active = index;
            this.name = title;

            this.allCategory.forEach((item) => {
                if (item.name == title) {
                    this.frontDesc = item.front_desc;
                    this.id = item.id.toString();
                }
            });

            this.getCateData(this.id);
        },
        getCateData(id) {
            search({
                categoryId: id,
                page: 1,
                size: 170,
            }).then((res) => {
                // console.log(res);
                if (res.data.errno == 0) {
                    this.goodsList = res.data.data.goodsList;
                }
            });
        },
    },
};
</script>
<style lang = "less" scoped>
.vtitle {
    text-align: center;
    h2 {
        font-size: 20px;
        line-height: 60px;
    }
    p {
        font-size: 14px;
        color: #666;
        line-height: 20px;
    }
}

ul {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
        width: 49%;
        img {
            width: 100%;
        }
        p {
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span {
            font-size: 14px;
        }
    }
}
</style>