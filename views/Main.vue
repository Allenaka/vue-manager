<template>
    <el-container class="h-full">
        <el-aside width="auto">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import bus from '@/assets/js/utils/bus.js'
export default {
    name: 'Main',
    components: {
        Aside,
        Header
    },
    created() {
        bus.$emit('collapseChanged', this.isCollapse);
        bus.$on('collapseChanged', val => {
            this.isCollapse = val;
        })
    },
    data() {
        return {
            msg: 'This is Home Page',
            // isCollapse: false,
        }
    }
}
</script>

<style lang="less" scoped>

    .el-header {
        background-color: @colorDefault;
        color: @colorPrimary;
        line-height: 60px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }
</style>