<template>
    <div class="section">
        <div class="wrapper">
            <ul class="Lsit">
                <template>
                    <li class="List-item" v-for="item in vlogList" :key="item.id">
                        <a :href="item.url">
                            <img :src="item.cover" alt="">
                            <template>
                                <div class="box">
                                    <div class="content">
                                        <p>{{ item.title }}</p>
                                    </div>
                                    <span>{{ item.comments }}人回复</span>
                                    <span>{{ item.likes }}人点赞</span>
                                </div>
                            </template>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vlogList: [],
            isShow: false,
        }
    },
    methods: {
        async getVlog() {
            let res = await this.$api.getVlog()
            console.log('vlog---', res.data);
            this.vlogList = res.data.data.list
            console.log(this.vlogList);
        },
    },
    created() {
        this.getVlog();
    },
}
</script>

<style lang="less" scoped>
.section {
    position: relative;
    padding: 20px 0;
    width: 1160px;
    margin: 10px auto;

    .wrapper {
        .Lsit {
            width: 1184px;
            position: relative;
            margin-top: -24px;
            margin-left: -24px;

            .List-item {
                display: inline-block;
                vertical-align: middle;
                margin-top: 24px;
                margin-left: 24px;
                position: relative;
                width: 270px;
                height: 270px;

                //
                border: 1px solid rgba(0, 0, 0, .03);
                border-radius: 12px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }

                .box {
                    position: absolute;
                    display: none;
                    width: 100%;
                    height: 100%;
                    display: none;
                    top: 0;
                    background: rgba(0, 0, 0, .5);
                    z-index: 999;
                    cursor: pointer;

                    .content {
                        height: 170px;
                        border-bottom: 1px solid hsla(0, 0%, 100%, .5);

                        p {
                            height: 122px;
                            overflow: hidden;
                            color: #fff;
                            font-size: 15px;
                        }

                    }

                    span {
                        color: #fff;
                        float: right;
                        padding-top: 20px;
                        margin-left: 10px;
                    }

                }


                .active {
                    display: block;
                }

                .active2 {
                    display: none;
                }

            }

            // 直接给子元素添加样式
            .List-item:hover {
                .box {
                    display: block;
                }
            }
        }
    }
}
</style>