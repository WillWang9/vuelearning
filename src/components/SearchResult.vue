<template>
    <div>
        <van-dropdown-menu>
            <van-dropdown-item
                title="价格"
                v-model="priceValue"
                :options="option"
                @change="changePriceOrder"
            />
            <van-dropdown-item
                title="分类"
                v-model="cateValue"
                :options="filterData"
                @change="changeCate"
            />
        </van-dropdown-menu>
    </div>
</template>

<script>
export default {
    name: "SearchResult",
    props: ["filterCategory"],
    data() {
        return {
            priceValue: "",
            option: [
                { text: "价格由高到低排序", value: "desc" }, //排列顺序，desc表示价格由高到低，asc表示价格由低到高
                { text: "价格由低到高排序", value: "asc" },
            ],
        };
    },
    components: {},
    computed: {
        //由于vant下拉菜单需要的key是text和value 所以用数组的map方法返回一个新数组 加上text和value 等于原数组的name和id值
        filterData() {
            return this.filterCategory.map((element) => {
                element.text = element.name;
                element.value = element.id;
                return element;
            });
        },

        //遍历数组 得到选中的(checked为true)的分类 赋值给分类下拉列表作为默认选中
        cateValue: {
            get() {
                let id = 0;
                this.filterCategory.forEach((element) => {
                    if (element.checked) {
                        id = element.value;
                    }
                });
                return id;
            },
            set() {},
        },
    },
    methods: {
        changeCate(value) {
            // console.log(value);
            this.$emit("sendcate", value);
        },
        changePriceOrder(value) {
            // console.log(value);
            this.$emit("sendprice", value);
        },
    },

    created() {},
};
</script>

<style lang="less" scoped>
</style>