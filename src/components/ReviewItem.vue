<template>
    <el-card class="review-item" shadow="hover" :style="bgColor">
        <div class="left">
            <p>{{data.label}}</p>
            <p>{{data.count}}</p>
        </div>
        <div class="right">
            <i class="el-icon-video-play"></i>
        </div>
        <div class="clearfix"></div>
    </el-card>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default() {
                return {
                    label: '--',
                    count: '--',
                    bgColor: '#fff'
                }
            }
        },
    },
    data() {
        return {
        }
    },
    computed: {
        bgColor() {
            return 'background-color: ' + this.data.bgColor;
        }
    }
}
</script>

<style lang="less" scoped>
    p {
        color: #fff
    }
    p:nth-of-type(1) {
        font-size: 24px;
    }
    .review-item {
        cursor: pointer;
        .el-icon-video-play {
            color: #fff;
            font-size: 150px;
            & {
                max-height: 116px;
                line-height: 116px;
            }
        }
    }
    .review-item:hover {
        margin-top: -10px;
        transition: margin-top .3s ease;
    }
    
</style>