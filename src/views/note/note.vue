<template>
    <div class="note">

        <div class="note-list" v-for="item in dataList" :key="item.id">
            <div class="demo-type">
                <img :src="item.face" alt="">
            </div>

            <div class="top-info">
                <div class="msg">
                    <span>{{ item.username }}</span> <span class="address">在 {{ item.forumsname }} 发布的游记</span>
                    <span class="address good">{{ item.likeNumber }}人点赞</span>
                    <span class="reply address good">最后回复{{ item.last_post_time }}</span>
                </div>
            </div>
            <div class="middle-info">
                <div class="msg">
                    {{ item.subject }}
                    <p>
                        {{ item.post }}
                    </p>
                </div>
            </div>
            <div class="img">
                <img :src="item.image" alt="">
            </div>
        </div>

        <!-- 右区域登录框 -->
        <div class="note-rf">
            <div class="rf-esc">
                加入穷游社区<br>
                和80,000,000穷游er在一起<br>
                发现最世界
            </div>
            <div class="rf-reg">
                <a href="">注册穷游</a>
            </div>
            <div class="rf-login">
                已有账号？ 立即
                <a href="http://localhost:8080/login">登录</a>
            </div>
            <div class="rf-app">
                <div class="app">
                    <img src="@/assets/images/rf-app.png" alt="">
                    <div class="app-infop">
                        <p>在手机上结伴看帖</p>
                        <a href="">iPhone</a>
                        <span class="app-rc">|</span>
                        <a href="">Android</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Note',
    data() {
        return {
            dataList: [],
        }
    },
    methods: {
        async getNotes() {
            let res = await this.$api.getNotes();
            console.log("游记攻略--", res.data);
            this.dataList = res.data.data.list
        },
    },
    created() {
        this.getNotes()
    }
}
</script>

<style lang="less" scoped>
.note {
    overflow: hidden;
    width: 900px;
    margin: 0 auto;
    position: relative;

    .note-list {
        position: relative;

        height: 200px;
        width: 600px;
        height: 157px;
        overflow: hidden;
        margin-bottom: 30px;

        .top-info {
            float: left;
            height: 40px;
            line-height: 40px;
            margin-left: 10px;
            font-size: 13px;

            .address {
                color: #959595;
                font-size: 13px;
            }

            .good {
                margin-left: 15px;
            }
        }

        .demo-type {
            float: left;
            width: 40px;
            height: 40px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 20px;
            }
        }

        .middle-info {
            float: left;

            .msg {
                width: 300px;
                overflow: hidden;
            }

        }

        .img {
            position: absolute;
            top: 40px;
            left: 400px;
        }

        p {
            font-size: 14px;
            color: #959595;
        }
    }

}

.note-rf {
    position: absolute;
    margin: 16px 0 0 30px;
    width: 270px;
    height: 350px;
    top: 0px;
    right: 20px;
    background: url('@/assets/images/notebg.jpg');

    .rf-esc {
        padding: 14px 0 0 22px;
        font-size: 16px;
        color: #fff;
        line-height: 26px;
    }

    .rf-reg {
        display: block;
        margin: 16px 0 0 22px;
        width: 104px;
        height: 34px;
        line-height: 34px;
        border: 1px solid #fff;
        border-radius: 3px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;

        a {
            color: #fff;
        }

        a:hover {
            color: greenyellow;
        }
    }

    .rf-login {
        margin: 35px 0 0 22px;
        color: #f5f5f5;
        font-size: 14px;

        a {
            color: #126b2d;
        }
    }

    .rf-reg:hover {
        background-color: #fff;
    }

    .rf-app {
        width: 100%;
        margin-top: 20px;
        height: 150px;
        border: 1px solid #eee;
        background-color: #fff;

        .app {
            margin-top: 40px;
            margin-left: 30px;
            width: 220px;
            height: 60px;

            .app-infop {
                float: right;

                p {
                    font-size: 12px;
                    margin-right: 10px;
                    color: #959595;
                }

                a {
                    font-size: 12px;
                    margin-right: 15px;
                }

                .app-rc {
                    display: inline-block;
                    margin: 0 10px 0 0;
                    color: #d7d7d7;
                }
            }

        }
    }
}
</style>