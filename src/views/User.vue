<template>
    <div>
        <div class="user_top">
            <img :src="headImg" alt="" />
            <h3 v-if="isLogin">{{ username }}</h3>
            <h3 v-else @click="modalshow = true">点击登录</h3>

            <van-icon
                :name="!isLogin ? 'arrow' : 'cross'"
                @click="loginCheck"
            />
        </div>

        <van-overlay v-show="modalshow" @click="modalshow = false">
            <div class="wrapper">
                <div class="modal" @click.stop>
                    <van-form @submit="onSubmit">
                        <van-field
                            v-model="username"
                            name="uname"
                            label="用户名"
                            placeholder="请输入用户名"
                            :rules="[{ required: true, message: '' }]"
                        />

                        <van-field
                            v-model="password"
                            type="password"
                            name="pwd"
                            label="密码"
                            placeholder="请输入密码"
                            :rules="[{ required: true, message: '' }]"
                        />

                        <div style="margin: 16px">
                            <van-button
                                round
                                block
                                type="info"
                                native-type="submit"
                                >提交</van-button
                            >
                        </div>
                    </van-form>
                </div>
            </div>
        </van-overlay>

        <UserFunction></UserFunction>

    </div>

</template>

<script>
import { postLogin } from "@/utils/http";
import headImg from "@/assets/images/touxiang.png";
import headImgS from "@/assets/images/w.jpg";
import UserFunction from "@/components/UserFunction.vue";

export default {
    name: "User",
    data() {
        return {
            isLogin: false,
            username: "",
            password: "",
            modalshow: false,
            headImg: headImg,
        };
    },
    created() {
        let userinfo = JSON.parse(localStorage.getItem("userinfo"));
        if (userinfo) {
            this.isLogin = true;
            this.username = userinfo.username;
        }
    },
    methods: {
        onSubmit(value) {
            postLogin({
                username: value.uname,
                pwd: value.pwd,
            }).then((res) => {
                // console.log(res);
                if (res.data.errno == 0) {
                    //如果错误码为0 既登录成功
                    this.isLogin = true; //修改登录状态

                    localStorage.setItem("token", res.data.data.token); //把token存到local

                    localStorage.setItem(
                        "userinfo",
                        JSON.stringify(res.data.data.userInfo)
                    ); //把用户信息转换json字符串存到local

                    this.modalshow = false; //隐藏模态
                    this.username = res.data.data.userInfo.username; //用户姓名赋值给页面
                    this.headImg = headImgS;
                } else if (res.data.errno == 602) {
                    this.$toast("密码错误,请重新输入");
                }
            });
        },
        loginCheck() {
            if (!this.isLogin) {
                this.modalshow = true; // 如果没登录就弹登录框
            } else {
                this.$dialog
                    .confirm({
                        title: "提示",
                        message: "确认要退出登录吗",
                    })
                    .then(() => {
                        localStorage.removeItem("userinfo");
                        localStorage.removeItem("token");
                        this.headImg = headImg;
                        this.isLogin = false;
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        },
    },
    components: {
        UserFunction,
    },
};
</script>

<style lang="less" scoped>
.user_top {
    background: #333;
    color: #fff;
    padding: 20px 10px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    img {
        border-radius: 50%;
        margin-right: 10px;
        width: 70px;
        height: 70px;
    }

    h3 {
        flex: 1;
        font-family: "微软雅黑";
    }
}

.van-overlay {
    z-index: 10;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.modal {
    padding-top: 35px;
    box-sizing: border-box;
    width: 90%;
    height: 220px;
    position: absolute;
    background-color: #fff;
    border-radius: 15px;

    .van-form {
        width: 90%;
        margin: 0 auto;
    }
}
</style>