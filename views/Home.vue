<template>
    <el-container class="h-full">
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Home',
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
    
    .el-aside {
        background-color: @colorPrimary;
        color: #fff;
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>