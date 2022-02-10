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
export default {
    created() {
        console.log(this.$route.path)
    },
    data() {
      return {
        isCollapse: false,
        data: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }, {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'video-play',
                url: 'MallManage/MallManage'
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
    computed: {
        hasChildMenu() {
            return this.data.filter(item => item.children)
        },
        noChildMenu() {
            return this.data.filter(item => !item.children)
        },
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item) {
          this.$router.push({
              path: item.path
          })
      },
      activeIndex() {
          this.$router
      }
    }
};
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
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