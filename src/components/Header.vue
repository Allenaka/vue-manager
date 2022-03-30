<template>
    <header>
        <div class="left">
            <el-button plain icon="el-icon-menu" circle @click="handleCollapse"></el-button>
            <span>{{pageName}}</span>
        </div>
        <div class="right">
            <el-dropdown>
                <div id="photo">
                    <img :src="userAvater" alt="photo">
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="jump('/center')">个人中心</el-dropdown-item>
                    <el-dropdown-item divided @click.native="handleSignOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    // import bus from "@/assets/js/utils/bus.js";
    import {mapState} from 'vuex'
    export default {
        created() {
            // bus.$on('collapseChanged', (val) => {
            //     this.isCollapse = val;
            // })
            // bus.$on('getCurrentPage', (data) => {
            //     this.pageName = data.label;
            // })
        },
        data() {
            return {
                // isCollapse: false,
                // pageName: ''
                userAvater: require('assets/img/photo.png')
            }
        },
        computed: {
            ...mapState({
                pageName: state => {
                    return state.tab.currentPath.label
                }
            })
            // pageName() {
            //     return this.$store.state.tab.currentPath.label
            // }
        },
        methods: {
            handleCollapse() {
                // this.isCollapse = !this.isCollapse;
                this.$store.commit('toggleCollapse');
                // bus.$emit('collapseChanged', this.isCollapse);
            },
            handleSignOut() {
                this.$store.commit('setToken', '');
                this.jump('/login')
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
    #photo img {
        width: 100%;
    }
    #photo {
        margin: 10px 0;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #ccc;
        overflow: hidden;
        cursor: pointer;
    }
</style>