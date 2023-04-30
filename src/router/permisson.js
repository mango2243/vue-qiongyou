import router from './index'
import store from '../store/index'
//配置前置路由导航守卫
router.beforeEach((to,from,next)=>{
    //判断进入这个路由界面的时候是否需要登录
    if(to.meta.isLogin){//
      if(store.state.user.userinfo.isLogin){
          next()
      }else{
        store.commit('changePath',to.path)
        next('/login')
      }
    }else{
      next()
    }
})