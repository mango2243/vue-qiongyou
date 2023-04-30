<template>
    <div>
        <!-- 搜索框-->
        <div class="search">
            <div class="content">
                <div class="title">你好, 世界!</div>
                <div class="input">
                    <el-input v-model="input" @blur="close" @focus="open" placeholder="搜索国家、城市、目的地"></el-input>
                    <el-button class="btn"><i class="iconfont icon-sousuo"></i>搜索</el-button>
                </div>
                <!-- 搜索下拉容器 -->
                <div class="list" v-show="isShow">
                    <ul v-if="list.length > 0">
                        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
                    </ul>
                    <div v-if="list.length <= 0 && mark" class="loading">数据加载中...</div>
                </div>
            </div>
        </div>

        <!-- 实时热门TOP10 -->
        <div class="wrapper">
            <div class="title">实时热门TOP10</div>
            <div class="List-Top">

                <div class="List1">
                    <h4 class="List-title">国家Top10</h4>
                    <ul class="List-list">
                        <li v-for="item in countryList" :key="item.id"> <span class="ranks">{{ item.rank }}</span> <a :href="item.web_url">{{ item.name }}</a></li>
                    </ul>
                </div>

                <div class="List2">
                    <h4 class="List-title">境外城市Top10</h4>
                    <ul class="List-list">
                        <li v-for="item in abroad_cityList" :key="item.id"> <span class="ranks">{{ item.rank }}</span> <a :href="item.web_url">{{ item.name }}</a></li>
                    </ul>
                </div>

                <div class="List3">
                    <h4 class="List-title">国内Top10</h4>
                    <ul class="List-list">
                        <li v-for="item in domestic_cityList" :key="item.id"> <span class="ranks">{{ item.rank }}</span> <a :href="item.web_url">{{ item.name }}</a></li>
                    </ul>
                </div>

                <div class="List4">
                    <h4 class="List-title">景点Top10</h4>
                    <ul class="List-list">
                        <li v-for="item in poiList" :key="item.id"> <span class="ranks">{{ item.rank }}</span> <a :href="item.web_url">{{ item.name }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            isShow: false,
            list: [],
            mark: true,
            //Top10各项数据
            countryList: [],
            abroad_cityList: [],
            domestic_cityList: [],
            poiList: [],
        }
    },
    watch: {//侦听器
        input(val) {
            if (!val) {
                this.isShow = false;
                return;
            }
            this.isShow = true;
            //获取输入的信息数据
            this.getDestSearch(val)
        }
    },
    methods: {
        //网络请求
        async getDestSearch(val) {
            let res = await this.$api.getDestSearch({
                keyword: val
            })
            console.log('搜索数据接口---', res.data.data.list);
            //判断无数据的情况
            this.list = res.data.data.list;
            //状态标识  无数据
            if (res.data.data.list.length == 0) {
                //查无数据 -- 加载中隐藏掉
                this.mark = false
            }
        },

        //Top10请求
        async getdestRanks() {
            let res = await this.$api.getdestRanks()
            console.log('排行Top10--', res.data);
            this.countryList = res.data.data.country.data
            this.abroad_cityList = res.data.data.abroad_city.data
            this.domestic_cityList = res.data.data.domestic_city.data
            this.poiList = res.data.data.poi.data
        },

        close() {
            this.isShow = false;
        },
        open() {
            if (this.input) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        }
    },
    created() {
        this.getdestRanks()
    }
}
</script>

<style lang="less" scoped>
.search {
    background: #efefef url('@/assets/images/bg.jpg') no-repeat top;
    height: 500px;
    background-size: cover;
    display: flex;
    align-items: center;

    .content {
        width: 760px;
        margin: 0 auto;
        position: relative;

        .list {
            position: absolute;
            width: 621px;
            min-height: 100px;
            background: #fff;
            top: 146px;
            border-radius: 6px;
            overflow: hidden;
            //  padding:20px;
            font-size: 12px;
            color: #444;

            li {
                line-height: 36px;
                padding-left: 20px;
                padding-right: 20px;
                border-bottom: 1px solid #eee;
            }

            li:hover {
                background: skyblue;
            }

            .loading {
                color: #999;
                line-height: 100px;
                text-align: center;
            }
        }

        .title {
            font-size: 56px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            text-shadow: 0 5px 5px rgb(0 0 0 / 10%);
            margin-bottom: 30px;
        }

        .input {
            display: flex;

            // 
            /deep/ .el-input__inner {
                border-radius: 4px 0 0 4px;
            }

            .btn {
                width: 160px;
                color: #fff;
                font-size: 16px;
                background-color: #28b76c;
                border: 1px solid #27ad66;
                border-radius: 0 4px 4px 0;

                .icon-sousuo {
                    padding-right: 6px;
                    font-size: 14px;
                }
            }

            .btn:hover {
                color: #fff;
            }

            /deep/ .el-input__inner {
                height: 50px;
            }
        }
    }
}

.wrapper {
    height: 400px;
    width: 1200px;
    margin: 0 auto;

    .ranks {
        vertical-align: middle;
        display: inline-block;
        width: 24px;
    }

    .title {
        margin-top: 30px;
        font-size: 24px;
        color: #000;
        text-align: center;
        height: 26px;
        line-height: 24px;
    }

    .List-Top {
        display: flex;

        justify-content: space-between;

        div {
            display: block;
        }

        .List-title {
            margin-bottom: 18px;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            font-weight: 500;
        }

        .List-list {
            li {
                padding: 6px 0;
                font-size: 14px;
            }
        }
    }


}
</style>