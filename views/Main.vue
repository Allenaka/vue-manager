<template>
    <el-container class="h-full">
        <el-aside width="auto">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from '@/components/Aside.vue'
export default {
    name: 'Main',
    components: {
        Aside
    },
    data() {
        return {
            msg: 'This is Home Page'
        }
    }
}
</script>

<style lang="less" scoped>

    .el-header {
        background-color: @colorDefault;
        color: @colorPrimary;
        text-align: center;
        line-height: 60px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>