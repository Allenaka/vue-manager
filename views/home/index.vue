<template>
    <el-row class="home" gutter="20">
        <el-col :span="6" v-for="item in reviewList" :key="item.id">
            <ReviewItem :data="item"></ReviewItem>
        </el-col>
    </el-row>
</template>

<script>
import ReviewItem from 'components/ReviewItem'
export default {
    name: 'home',
    components: {
        ReviewItem
    },
    data() {
        return {
            reviewList: [
                {
                    id: 0,
                    label: '文章数量',
                    count: 0,
                    bgColor: '#0a97bb'
                }, {
                    id: 1,
                    label: '评论数量',
                    count: 0,
                    bgColor: '#1e9543'
                }, {
                    id: 2,
                    label: '分类数量',
                    count: 0,
                    bgColor: '#ffbc00'
                }, {
                    id: 3,
                    label: '标签数量',
                    count: 0,
                    bgColor: '#ea4643'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>