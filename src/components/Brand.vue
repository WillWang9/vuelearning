<template>
    <div id="brand">
        <h3 class="title">品牌制造商直供</h3>
        <ul>
            <li v-for="item in brand" :key="item.id">
                <h4>{{ item.name }}</h4>
                <p>{{ item.floor_price | formatPrice }}</p>
                <img :src="item.pic_url" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Brand",
    props: ['brand'],
    data() {
        return {

        };
    },
    components: {

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
    word-spacing:-4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        position: relative;
        width: 49%;
        padding-bottom: 7px;
        font-size: 16px;
        line-height: 24px;
        h4{
            position: absolute;
            top: 10px;
            left: 10px;
            font-weight: 500;
        }
        p{
            position: absolute;
            left: 10px;
            top: 40px;
            color: #8B0000;
        }
        img {
            width: 100%;
        }

    }
}
</style>