<template>
    <header>
        <div>
            <el-button plain icon="el-icon-menu" circle @click="toggleCollapse"></el-button>
            <span>{{pageName}}</span>
        </div>
    </header>
</template>

<script>
    import bus from "@/assets/js/utils/bus.js";
    export default {
        created() {
            bus.$on('collapseChanged', (val) => {
                this.isCollapse = val;
            })
            bus.$on('getCurrentPage', (data) => {
                this.pageName = data.label;
            })
        },
        data() {
            return {
                isCollapse: false,
                pageName: ''
            }
        },
        methods: {
            toggleCollapse() {
                this.isCollapse = !this.isCollapse;
                bus.$emit('collapseChanged', this.isCollapse);
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-button, .el-button:focus, .el-button:hover {
        background-color: @colorPrimary;
        border-color: #fff;
        color: #fff;
        margin-right: 15px;
    }
    .el-button:hover {
        background-color: @colorPrimaryHover;
    }
    .el-button:active {
        background-color:#fff;
        color: @colorPrimaryHover;
        border-color: @colorPrimaryHover;
    }
    .el-button + span {
        font-weight: 600;
    }
    header {
        padding: 0 15px;
    }
</style>