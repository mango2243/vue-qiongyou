//封装的请求对象地址
import base from "./base";

//二次封装的axios 
import axios from "@/utils/request";

//定义方法
export default {
    // 热门城市
    getHotCity() {
        return axios.get(base.hotcity);
    },

    // 搜索框内容 get  keyword=''
    getSearch(params) {
        return axios.get(base.search, { params });
    },

    //  今日推荐
    getTodyInfo() {
        return axios.get(base.todyInfo);
    },

    //热门游记与话题
    getHotTravel() {
        return axios.get(base.hotTravel);
    },
    
    /* 目的地搜索接口
        destSearch
        &keyword=55 */
    getDestSearch(params) {
        return axios.get(base.destSearch, { params });
    },

    // 获取目的地数据排行
    getdestRanks() {
        return axios.get(base.destRanks)
    },

    //游记攻略
    getNotes() {
        return axios.get(base.notes)
    },

    //结伴旅游
    getCoTravel() {
        return axios.get(base.cotravel)
    },

    //穷游vlogs
    getVlog() {
        return axios.get(base.vlog)
    }
};


