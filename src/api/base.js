//公共配置地址接口
const base ={
    hotcity:'/api/aj/getcitycode',//热门城市
    search:'/foo/qcross/place/public.php?action=placesearch&client=web',//搜索框
    todyInfo:'/foo/qcross/home/index.php?action=recommend',//今日推荐
    hotTravel:'/foo/qcross/home/ajax?action=thread',//热门游记
    destSearch: '/boo/qcross/place/public.php?action=placesearch&client=web',//目的地搜索
    destRanks: '/boo/qcross/place/public.php?action=placetop10', //目的地数据排行
    notes: '/abc/index.php?action=getTravels',//游记攻略
    cotravel: '/abc/index.php?action=getTogether&page=1', //结伴旅游
    vlog: '/foo/qcross/biu/index/web?page=0',//穷游vlog
}

//导出整个对象
export default base


