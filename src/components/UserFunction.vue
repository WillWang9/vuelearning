<template>
    <van-grid column-num="3" :border="false" square :clickable="true">
        <van-grid-item icon="label-o" text="我的订单" />
        <van-grid-item icon="coupon-o" text="优惠券" />
        <van-grid-item icon="goods-collect-o" text="礼品卡" />
        <van-grid-item icon="location-o" text="地址管理" />
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="vip-card-o" text="会员中心" />
        <van-grid-item icon="balance-o" text="我的钱包" />
        <van-grid-item icon="envelop-o" text="我的消息" />
        <van-grid-item icon="friends-o" text="我的好友" />
        <van-grid-item icon="service-o" text="联系客服" />
        <van-grid-item icon="warn-o" text="账号安全" />
        <van-grid-item icon="setting-o" text="设置" />
    </van-grid>
</template>

<script>
export default {
    name: "UserFunction",
    data() {
        return {};
    },
    components: {},
};
</script>

<style lang="less" scoped>
</style>