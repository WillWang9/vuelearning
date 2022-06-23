<template>
    <div>
        <van-submit-bar
            :price="totalPrice"
            button-text="提交订单"
            @submit="onSubmit"
        >
            <van-checkbox
                v-model="checked"
                checked-color="#ee0a24"
                @click="checkAllFn"
            >
                <span>全选</span>
            </van-checkbox>
        </van-submit-bar>
        <div class="content">
            <van-checkbox-group v-model="result">
                <van-swipe-cell v-for="item in cartList" :key="item.id">
                    <van-checkbox
                        :name="item"
                        @click="singleCheckFn"
                        icon-size="18px"
                        checked-color="#ee0a24"
                    ></van-checkbox>

                    <van-card
                        :price="item.retail_price.toFixed(2)"
                        :title="item.goods_name"
                        :thumb="item.list_pic_url"
                    >
                        <template #num>
                            <van-stepper
                                async-change
                                @plus="numUpdate(item)"
                                @minus="numUpdate(item)"
                                @blur="numUpdate(item)"
                                v-model="item.number"
                                input-width="25px"
                                button-size="20px"
                            />
                        </template>
                    </van-card>

                    <template #right>
                        <van-button
                            square
                            type="danger"
                            text="删除"
                            class="delete-button"
                            @click="del(item)"
                        />
                    </template>
                </van-swipe-cell>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script>
import { getCartData, cartUpdate, cartDelete } from "@/utils/http";

export default {
    name: "Cart",
    data() {
        return {
            checked: "",
            cartList: "",
            result: [],
            sum: 0,
        };
    },
    methods: {
        onSubmit() {
            this.$toast.success("跳转支付");
        },
        numUpdate(item) {
            // console.log(item);
            cartUpdate({
                goodsId: item.goods_id,
                id: item.id,
                number: item.number,
                productId: item.product_id,
            });
        },

        del(item) {
            this.result = this.result.filter((prop) => {
                return prop != item;
            });
            cartDelete({
                productIds: String(item.product_id),
            }).then((res) => {
                if (res.data.errno == 0) {
                    this.$toast.success("删除成功");
                    this.cartList = res.data.data.cartList;
                    if (this.cartList.length == 0) {
                        this.checked = false;
                    }
                }
            });
        },
        singleCheckFn() {
            // 单选事件
            // console.log(this.result);
            if (
                this.result.length == this.cartList.length &&
                this.cartList.length != 0
            ) {
                this.checked = true;
            } else {
                this.checked = false;
            }
        },
        checkAllFn() {
            // 全选事件
            if (this.checked) {
                this.result = this.cartList;
            } else {
                this.result = [];
            }
        },
        getData() {
            getCartData().then((res) => {
                // console.log(res);
                this.cartList = res.data.data.cartList;
            });
        },
    },
    created() {
        this.getData();
    },
    computed: {
        totalPrice() {
            let sum = 0;
            this.result.forEach((element) => {
                sum += element.retail_price * element.number * 100;
            });
            return sum;
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    padding-bottom: 49px;
}
/deep/.van-card {
    margin: 0;
}
/deep/.van-submit-bar {
    bottom: 49px;
}
.delete-button {
    height: 100%;
}

.van-card__title {
    font-size: 16px;
}

/deep/.van-card__content {
    justify-content: space-around;
}
.van-swipe-cell {
    position: relative;
    margin-bottom: 5px;
}
.van-checkbox {
    position: absolute;
    z-index: 9999;
    top: 40%;
    left: 2%;
}

.numBut {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    margin-right: 10px;
}

.num {
    font-size: 14px;
    vertical-align: middle;
}
</style>