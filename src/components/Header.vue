<template>
    <div class="header">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#323232"
            text-color="#fff" active-text-color="#10b041" router>
            <el-menu-item index="/" style="border-bottom:none;">
                <img src="@/assets/images/logo.png" width="70px" alt="">
            </el-menu-item>
            <el-menu-item index="/dest">目的地</el-menu-item>
            <el-menu-item index="/note">游记攻略</el-menu-item>
            <el-menu-item index="/cotravel">结伴旅游</el-menu-item>
            <el-menu-item index="/vlog">穷游vlog</el-menu-item>
        </el-menu>
        <div class="header-right">
            <template v-if="userinfo.username">
               <span>{{ userinfo.username }}&nbsp;</span>
               <span @click="exit">退出登录&nbsp;</span>
            </template>
            <router-link to="/login" v-else>登录</router-link>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState('user',['userinfo'])
    },
    methods: {
        ...mapMutations('user',['deleteUser']),
        exit() {
            // 清空 本地存储 vuex 
            localStorage.removeItem('user')
            this.deleteUser()
            this.$router.push('/')
        }
    },
}

</script>

<style lang="less" scoped>
.header {
    display: flex;
    background: #323232;
    color: #fff;

    .header-right {
        padding: 0 30px;
        line-height: 40px;
        font-weight: 700;
        font-size: 14px;

        a {
            color: #fff;
        }
    }

    .el-menu-demo {
        flex: 1;
        font-size: 16px;
        font-weight: 700;
        padding-left: 30px;

        .el-menu-item {
            height: 40px;
            line-height: 40px;
        }
    }

    /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 40px !important;
        line-height: 40px;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
}
</style>