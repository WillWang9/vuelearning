<template>
    <div id="details">
        <DetailGallery :gallery="gallery"></DetailGallery>
        <van-icon class="back" name="arrow-left" @click="$router.go(-1)" />
        <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
        />

        <van-popup
            v-model="showCart"
            closeable
            round
            position="bottom"
            :style="{ height: '40%' }"
        >
            <div class="cartDetail">
                <div class="carttop">
                    <img :src="info.list_pic_url" alt="" />
                    <div>
                        <b>￥{{ info.retail_price }}</b>
                        <p>剩余100件</p>
                        <p>请选择</p>
                    </div>
                </div>
                <div class="cartbot">
                    <p>购买数量</p>
                    <van-stepper
                        input-width="30px"
                        button-size="28px"
                        v-model="cartnumber"
                    />
                </div>
            </div>

            <van-goods-action>
                <van-goods-action-button
                    color="#be99ff"
                    type="warning"
                    text="加入购物车"
                    @click="addCart"
                />
                <van-goods-action-button
                    color="#7232dd"
                    type="danger"
                    text="立即购买"
                />
            </van-goods-action>
        </van-popup>

        <van-goods-action>
            <van-goods-action-icon
                icon="share-o"
                text="分享"
                @click="showShare = true"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                :badge="num != 0 ? num : ''"
                @click="goCart"
            />
            <van-goods-action-button
                color="#be99ff"
                type="warning"
                text="加入购物车"
                @click="showCart = true"
            />
            <van-goods-action-button
                color="#7232dd"
                type="danger"
                text="立即购买"
            />
        </van-goods-action>
        <div class="intro">
            <p class="price">￥{{ info.retail_price }}</p>
            <span
                >享受12期免息,每期{{
                    (info.retail_price / 12).toFixed(2)
                }}元(每日{{ (info.retail_price / 12 / 30).toFixed(2) }}元)
            </span>
            <p class="tit">{{ info.name }}</p>
            <p class="subtit">{{ info.goods_brief }}</p>
        </div>
        <div class="goodsParam">
            <p class="ptit">商品参数</p>
            <ul>
                <li v-for="(item, index) in attribute" :key="index">
                    <b> {{ item.name }} : </b>
                    <i>
                        {{ item.value }}
                    </i>
                </li>
            </ul>
        </div>
        <van-divider>常见问题</van-divider>
        <div class="qna">
            <ul>
                <li v-for="item in issue" :key="item.id">
                    <i class="ques">{{ item.question }}</i>
                    <p class="anwser">{{ item.answer }}</p>
                </li>
            </ul>
        </div>
        <van-divider>商品详情</van-divider>
        <div id="detailImg" v-html="info.goods_desc"></div>
        <van-divider>相关商品</van-divider>
        <div class="relate">
            <ul>
                <li
                    v-for="item in related"
                    :key="item.id"
                    @click="detail(item)"
                >
                    <img v-lazy="item.list_pic_url" alt="" />
                    <p>{{ item.name }}</p>
                    <span>{{ item.retail_price | formatPrice }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import DetailGallery from "@/components/DetailGallery.vue";
import { goodsDetail, goodsRelated, addCartAJAX, cartNum } from "@/utils/http";

export default {
    name: "GoodsDetail",
    data() {
        return {
            showCart: false,
            goodsId: this.$route.query.id,
            gallery: [],
            info: [],
            attribute: [],
            issue: [],
            related: [],
            productId: "",
            num: "",
            cartnumber: "",
            showShare: false,
            options: [
                [
                    { name: "微信", icon: "wechat" },
                    { name: "朋友圈", icon: "wechat-moments" },
                    { name: "微博", icon: "weibo" },
                    { name: "QQ", icon: "qq" },
                ],
                [
                    { name: "复制链接", icon: "link" },
                    { name: "分享海报", icon: "poster" },
                    { name: "二维码", icon: "qrcode" },
                    { name: "小程序码", icon: "weapp-qrcode" },
                ],
            ],
        };
    },
    components: { DetailGallery },
    methods: {
        getData() {
            goodsDetail({
                id: this.goodsId,
            }).then((res) => {
                let ddata = res.data.data;
                // console.log(ddata);
                this.gallery = ddata.gallery;
                this.info = ddata.info;
                this.attribute = ddata.attribute;
                this.issue = ddata.issue;
                this.productId = ddata.productList[0].id;
            });

            goodsRelated({
                id: this.goodsId,
            }).then((res) => {
                // console.log(res.data.data);
                this.related = res.data.data.goodsList;
            });
        },
        detail(item) {
            this.$router.push({
                name: "detail",
                query: { id: item.id },
            });
            location.reload();
        },
        addCart() {
            addCartAJAX({
                goodsId: this.goodsId,
                productId: this.productId,
                number: this.cartnumber,
            }).then((res) => {
                if (res.data.errno == 0) {
                    this.$toast.success("添加成功");
                    this.num = res.data.data.cartTotal.goodsCount;
                }
            });
            this.showCart = false;
        },
        goCart() {
            this.$router.push({ name: "cart" });
        },
    },
    created() {
        this.getData();
        cartNum().then((res) => {
            this.num = res.data.data.cartTotal.goodsCount;
        });
    },
};
</script>

<style lang="less" scoped>
#details { 
    .van-goods-action {
        z-index: 100;
    }
    background-color: #f4f4f4;
    padding-bottom: 50px;
    .intro,
    .goodsParam,
    .qna {
        background-color: white;
        width: 96%;
        border-radius: 10px;
        margin: 8px auto;
        padding: 15px;
        box-sizing: border-box;
        .price {
            margin-top: 16px;
            font-weight: 600;
            color: #8b0000;
            font-size: 24px;
        }
        span {
            font-size: 14px;
            color: #8b0000;
        }
        .tit {
            margin-top: 15px;
            margin-bottom: 5px;
            font-size: 20px;
            font-weight: 600;
        }
        .subtit {
            font-size: 14px;
            color: #666;
        }
        .ptit {
            font-size: 14px;
            padding-bottom: 5px;
        }
        b {
            font-size: 14px;
            color: #777;
        }
        i {
            font-size: 14px;
        }
        .anwser {
            font-size: 14px;
            line-height: 18px;
        }
        .ques {
            color: #8b0000;
            margin-top: 5px;
        }
    }

    /deep/#detailImg {
        img {
            width: 100%;
            display: block;
        }
    }

    .relate {
        ul {
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 48%;
                p {
                    font-size: 16px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                span {
                    font-size: 14px;
                    color: #8b0000;
                }
                img {
                    width: 100%;
                }
            }
        }
    }

    .cartDetail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60%;
        margin: 20px;
        img {
            width: 96px;
            height: 96px;
        }
        .carttop {
            display: flex;
            div {
                margin-left: 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
            b {
                font-size: 20px;
                color: #8b0000;
            }
            p {
                font-size: 12px;
                color: #666;
            }
        }
        .cartbot {
            display: flex;
            justify-content: space-between;
            p {
                font-size: 16px;
                line-height: 28px;
                margin-left: 10px;
            }
        }
    }

    /deep/.back {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        position: fixed;
        top: 20px;
        left: 20px;
        font-size: 14px;
    }
}
</style>


