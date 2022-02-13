<template>
  <el-menu
    :default-active="activeIndex"
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
        menuList: []
      };
    },
    created() {
        this.requestMenuList();
    },
    computed: {
        hasChildMenu() {
            return this.menuList.filter(item => item.children)
        },
        noChildMenu() {
            return this.menuList.filter(item => !item.children)
        },
        currentPageRoute() {
            return this.menuList.find(item => item.path === this.activeIndex)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        },
        activeIndex() {
            let result = this.$route.path.match(/\/[^/]*/g)[0]
            return result;
        }
    },
    watch: {
        $route (newRoute) {
            let result = this.menuList.find(item => item.path === newRoute.path);
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
      requestMenuList() {
        this.$server.get('/navMenu')
            .then(
                res => {
                    if(res.status === 200) {
                        this.menuList = res.data.data;
                        this.$store.commit('setCurrentPath', this.currentPageRoute)
                    }
                }
            )
      }
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