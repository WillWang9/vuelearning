<template>
    <div class="chosen">
        <h3 class="title">专题精选</h3>
        <van-swipe :loop="false" class="my-swipe" :width="300" :show-indicators="false">
            <van-swipe-item v-for="item in topic" :key="item.id">
                <img :src="item.scene_pic_url" alt="">
                <h2>
                    {{ item.title }}
                    <span>
                        {{ item.price_info | formatPrice }}
                    </span>
                </h2>
                <p>
                    {{ item.subtitle }}
                </p>
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script>
export default {
    name: "TopicChosen",
    props: ['topic'],
    data() {
        return {

        };
    },
    components: {

    },
};
</script>

<style lang="less" scoped>
.chosen {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 8px;
    ;
    padding-right: 8px;
}

.my-swipe .van-swipe-item {
    color: #000;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;

    img {
        width: 300px;
        height: 200px;
    }

    h2 {
        line-height: 40px;

        span {
            color: #8B0000;
        }
    }

    p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
    }

}
</style>