<template>
    <div id="brand">
        <h3 class="title">品牌制造商直供</h3>
        <ul>
            <li v-for="item in brand" :key="item.id" @click="goChannel(item)">
                <h4>{{ item.name }}</h4>
                <p>{{ item.floor_price | formatPrice }}</p>
                <img :src="item.pic_url" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Brand",
    props: ["brand"],
    data() {
        return {};
    },
    components: {},
    created() {},
    methods: {
        goChannel(item) {
            // console.log(item.id);
            let mark = item.id;
            if (mark == 1039000) {
                this.$router.push({
                    name: "channel",
                    query: {
                        id: 1008000,
                    },
                });
            } else if (mark == 1001002) {
                this.$router.push({
                    name: "channel",
                    query: {
                        id: 1013001,
                    },
                });
            } else if (mark == 1001008) {
                this.$router.push({
                    name: "channel",
                    query: {
                        id: 1005001,
                    },
                });
            } else if (mark == 1001015) {
                this.$router.push({
                    name: "channel",
                    query: {
                        id: 1005002,
                    },
                });
            }
        },
    },
};
</script>

<style lang="less" scoped>
#brand {
    margin-top: 20px;
    margin-bottom: 20px;
}

h3 {
    font-size: 20px;
}

ul {
    word-spacing: -4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        position: relative;
        width: 49%;
        padding-bottom: 7px;
        font-size: 16px;
        line-height: 24px;
        h4 {
            position: absolute;
            top: 10px;
            left: 10px;
            font-weight: 500;
        }
        p {
            position: absolute;
            left: 10px;
            top: 40px;
            color: #8b0000;
        }
        img {
            width: 100%;
        }
    }
}
</style>