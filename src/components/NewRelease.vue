<template>
    <div>
        <h3 class="title">周一周四·新品首发</h3>
        <ul id="newgoods">
            <li v-for="item in newgoods" :key="item.id">
                <img :src="item.list_pic_url" alt="">
                <div>{{ item.name }}</div>
                <p>{{ item.retail_price | formatPrice }}</p>
            </li>


        </ul>
    </div>
</template>

<script>
export default {
    name: "NewRelease",
    props: ['newgoods'],
    data() {
        return {

        };
    },
    components: {

    },
};
</script>

<style lang="less" scoped>
#newgoods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
    line-height: 24px;
    word-spacing: -4px;
    li{
        padding-bottom: 10px;
        margin-bottom: 10px;
        width: 49%;
        font-size: 16px;
        img{
            width: 100%;
        }
        p{
            margin-top: 5px;
            color: #8B0000;
        }
    }
}
</style>