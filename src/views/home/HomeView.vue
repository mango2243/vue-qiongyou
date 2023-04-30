<template>
<div class="home">

    <!-- 轮播图区域 -->
    <div class="Banner">
        <!-- 轮播图部分 -->
        <!-- <SwiperBanner /> -->
        <Banner />

        <!-- 搜索区 -->
        <div class="search">
            <el-input v-model="input" @focus="getInput()" @blur="leaveInput()" placeholder="请输入内容"></el-input>
            <!-- 聚焦展示热门城市 -->
            <div class="list" v-show="isShow">
                <p class="info">
                    温馨提示：可以直接输入城市的中文、英文来匹配检索
                </p>
                <div class="title">热门城市</div>
                <div class="citys">
                    <a href="##"><span v-for="item in hotCitys" :key="item.id">{{
                        item.name
                    }}</span></a>
                </div>
            </div>

            <!-- 搜索列表 -->
            <div class="search-list" v-show="isShowList">
                <ul>
                    <li v-for="item in searchList" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>

        <!-- 图片推广区 -->
        <div class="section section-gray">
            <div class="wrapper">
                <ul>
                    <li>
                        <img src="@/assets/images/left.jpg" width="740px" alt="" />
                    </li>
                    <li>
                        <img src="@/assets/images/right.jpg" width="400px" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 今日推荐区 -->
    <div class="recommend">
        <div class="title">今日推荐</div>
        <div class="content">
            <ul>
                <li v-for="item in recommend">
                    <a :href="item.data.href"><img :src="item.data.pic" alt="" /></a>
                    <div class="info">
                        <div class="subtitle">
                            <p>{{ item.data.subject }}</p>
                        </div>
                        <div class="bottom">
                            <template v-if="item.type == 'video'">
                                <span class="fl">{{ item.data.desc }}</span>
                                <span class="fr">{{ item.data.tag }}</span>
                            </template>
                            <template v-else-if="item.type == 'bbs'">
                                <span class="fl">{{ item.data.username }}</span>
                                <span class="fr">{{ item.data.views }}浏览</span>
                            </template>
                            <template v-else>
                                <span class="fr money" v-html="item.data.price">
                                </span>
                                <span class="fl">{{ item.data.start_pos }}</span>
                            </template>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 热门游记区布局 -->
    <HomeTravel></HomeTravel>

</div>
</template>

<script>
import Banner from "./banner/Banner.vue";
import HomeTravel from "./travel/HomeTravel.vue"

export default {
    name: "HomeView",
    components: {
        Banner,
        HomeTravel,
    },
    data() {
        return {
            input: "",
            isShow: false, //控制热门城市列表
            isShowList: false, //控制搜索展示列表
            hotCitys: [], // 热门城市数据
            searchList: [], //搜索数据
            recommend: [], //今日推荐
        };
    },
    methods: {
        // 控制搜索下拉框的显示/隐藏
        getInput() {
            if (this.isShowList == false) {
                this.isShow = true;
            }
        },
        leaveInput() {
            this.isShow = false;
            this.isShowList = false;
        },

        //获取热门城市数据
        async getHotCity() {
            let res = await this.$api.getHotCity();
            console.log("热门城市--", res.data);
            this.hotCitys = res.data.result.hotcity;
        },

        async getTodyInfo() {
            let res = await this.$api.getTodyInfo();
            console.log("今日推荐--", res.data);
            this.recommend = res.data.data;
        },
    },
    created() {
        this.getHotCity();
        this.getTodyInfo();
    },
    watch: {
        input(val, old) {
            if (!val) {
                this.isShow = true;
                this.isShowList = false;
                return;
            }
            this.isShow = false;
            this.isShowList = true;
            this.$api
                .getSearch({
                    keyword: val,
                })
                .then((res) => {
                    console.log("搜索请求---", res.data);
                    this.searchList = res.data.data.list;
                });
        },
    },
};
</script>

<style lang="less" scoped>
// 轮播图区域
.Banner {
    position: relative;

    .search {
        position: absolute;
        width: 500px;
        top: 40%;
        left: 30%;
        z-index: 99;

        .list {
            height: 200px;
            width: 500px;
            background-color: #fff;
            z-index: 99;
            box-sizing: border-box;
            padding: 20px;

            .info {
                font-size: 12px;
                color: #999;
            }

            .title {
                padding: 10px 0;
                border-bottom: 1px solid #eee;
            }

            .citys {
                span {
                    display: inline-block;
                    padding: 7px 14px 10px 0;
                    font-size: 14px;
                    color: #666;
                }
            }
        }

        .search-list {
            width: 500px;
            min-height: 60px;
            background: #fff;
            margin-top: 5px;
            border-radius: 6px;

            li {
                padding: 5px;
                font-size: 13px;
            }
        }
    }
}

//图片推广区
.section {
    position: relative;
    padding: 10px 0;
    min-width: 1160px;
}

.wrapper {
    margin: 0 auto;
    width: 1160px;
    position: relative;
}

// 两个图片
.section.section-gray {
    border-color: #ececec;
    border-style: solid;
    border-width: 1px 0;
    background-color: #f5f5f5;

    ul {
        overflow: hidden;
        margin-right: -20px;
        // height: 110px;
    }

    ul li {
        float: left;
        margin-right: 20px;
        height: 110px;
        border-radius: 3px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
    }
}

//今日推荐区
.recommend {
    width: 1200px;
    margin: 0 auto;
    height: 680px;

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: 400;
        margin: 10px 0;
        color: rgb(63, 59, 59);
    }

    .content li {
        float: left;
        margin: 0px 0px 20px 20px;
        width: 275px;
        height: 300px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        background: #fff;

        img {
            width: 100%;
            height: 175px;
        }
    }

    .info {
        padding: 0 18px;
        border: 1px solid #ececec;
        border-top: 0;
        height: 114px;
        line-height: 24px;
        overflow: hidden;

        .subtitle {
            height: 60px;
            font-size: 16px;
            font-weight: 600;
            overflow: hidden;
        }

        .bottom {
            margin-top: 16px;
            height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #636363;


            .fl {
                float: left;
                font-size: 14px;
                font-weight: 600;
            }

            .money {
                /deep/ em {
                    font-size: 18px;
                    color: #ff7466 !important;
                }
            }

            .fr {
                float: right;
                font-size: 13px;

                em {
                    font-size: 20px;
                    color: #ff7466;
                }

            }
        }
    }
}


</style>