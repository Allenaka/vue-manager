<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#FFD31C"
    text-color="#ffffff"
    active-text-color="#FFD31C"
    router
  >
    <el-menu-item v-for="item in noChildMenu" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="(item, index) in hasChildMenu" :index="index+''" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>

        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.label}}</el-menu-item>

    </el-submenu>
  </el-menu>
</template>

<script>
// import bus from '@/assets/js/utils/bus.js'
export default {
    // props: {
    //     isCollapse: Boolean,
    // },
    data() {
      return {
        data: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }, {
                path: '/article',
                name: 'article',
                label: '文章管理',
                icon: 'video-play',
                url: 'ArticleManage/ArticleManage'
            }, {
                path: '/category',
                name: 'category',
                label: '分类管理',
                icon: 'video-play',
                url: 'CategoryManage/CategoryManage'
            }, {
                path: '/tag',
                name: 'tag',
                label: '标签管理',
                icon: 'video-play',
                url: 'TagManage/TagManage'
            }, {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
            }, {
                label: '其他',
                icon: 'location',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    }, {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    }
                ]
            }
        ]
      };
    },
    created() {
        this.$store.commit('setCurrentPath', this.currentPageRoute)
    },
    mounted() {
        // bus.$emit('getCurrentPage', this.currentPageRoute)
    },
    computed: {
        hasChildMenu() {
            return this.data.filter(item => item.children)
        },
        noChildMenu() {
            return this.data.filter(item => !item.children)
        },
        currentPageRoute() {
            return this.data.find(item => item.path === this.$route.path)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    },
    watch: {
        $route (newRoute) {
            let result = this.data.find(item => item.path === newRoute.path);
            result && this.$store.commit('setCurrentPath', result)
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
};
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo {
        height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    i {
        color: @textColorLight;
    }
    .el-menu-item.is-active {
        background-color: @colorDefault !important;
    }
    .el-submenu /deep/ .el-submenu__icon-arrow {
        color: @textColorLight !important;
    }
</style>