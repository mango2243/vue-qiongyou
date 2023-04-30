<template>
    <div class="co-travel">
        <!-- 标题区 -->
        <div class="title">
            <i class="el-icon-view"></i>
            我想约上你，一起看世界
            <a href="bbs.qyer.com/forum-2-1.html">更多待约游</a>
            <i class="el-icon-d-arrow-right"></i>
        </div>

        <!-- 详情布局 -->
        <div class="co-list" v-for="item in cotravelList" :key="item.id">
            <div class="demo-type">
                <img :src="item.face" alt="">
            </div>
            <div class="top-info">
                <div class="top-msg">
                    <span>{{ item.username }}</span>
                    <span class="address good"><i class="el-icon-view"></i>{{ item.viewNumber }}人浏览</span>
                    <span><i class="el-icon-chat-dot-square"></i> {{ item.total_replies }}人回复</span>
                    <span class="reply address good">最后回复{{ item.last_post_time }}</span>
                </div>
            </div>
            <div class="msg">
                {{ item.subject }}
            </div>
            <div class="info">
                <div class="time">
                    <span class="time1"><em class="time-s">出发&nbsp;</em>{{ item.together_info.departure_time_earliest }}
                    </span>
                    <br>
                    <span class="time2"><em class="time-s">出发&nbsp;</em>{{ item.together_info.departure_time_latest }}
                    </span>
                </div> 
                <div class="address">
                    <em class="el-icon-location-outline"></em>
                    <div class="address-info">
                        <span v-for="it in item.together_info.placename">{{ it.cn_name }}、</span>                       
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Co-travel',
    data() {
        return {
            cotravelList: [],
            infoList: [],
        }
    },
    methods: {
        async getCoTravel() {
            let res = await this.$api.getCoTravel()
            console.log('结伴出游', res.data);
            this.cotravelList = res.data.data
        }
    },
    created() {
        this.getCoTravel()
    },
    computed: {

    },
}
</script>

<style lang="less" scoped>
.co-travel {
    width: 1000px;
    margin: 0 auto;

    .title {
        margin: 20px 0;
        font-size: 14px;
        color: #636363;

        .el-icon-view {
            color: green;
            margin-right: 10px;
        }

        a,
        el-icon-d-arrow-right {
            color: #10b041;
            margin-left: 10px;
        }

    }

    .co-list {
        width: 1000px;
        height: 200px;
        position: relative;

        .msg {
            position: absolute;
            float: left;
            width: 400px;
            height: 100px;
            top: 50px;
            left: 30px;
        }

        .top-info {
            position: absolute;
            height: 40px;
            line-height: 40px;
            margin-left: 30px;
            font-size: 13px;
            width: 500px;
            height: 100px;
            top: 0px;

            .address {
                color: #959595;
                font-size: 13px;
            }

            .good {
                margin-left: 30px;
            }

            .el-icon-chat-dot-square {
                margin-left: 10px;
            }

            .top-msg {
                margin-left: 20px;
            }

        }

        .info {
            position: absolute;
            width: 400px;
            height: 80px;
            bottom: 20px;
            left: 30px;
            border: 1px solid #eee;

            .time {
                float: left;
                padding: 20px 0px 20px 20px;
                width: 150px;

                .time-s {
                    color: #959595;
                }
            }

            .address {
                .el-icon-location-outline {
                    margin-top: 30px;
                    width: 30px;
                    height: 40px;
                }

                .address-info {
                    width: 170px;
                    height: 62px;
                    float: right;
                    font-size: 14px;
                    line-height: 20px;
                    margin: 10px 20px 10px 10px;
                    overflow: hidden;
                }

            }
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

}
</style>