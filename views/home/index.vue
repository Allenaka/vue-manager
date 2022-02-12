<template>
    <el-row class="home" :gutter="20">
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
            reviewList: []
        }
    },
    created() {
        this.requestInfo()
    },
    methods: {
        requestInfo() {
            this.$server.get('/info')
                .then(
                    res => {
                        this.reviewList = res.data.data;
                    }
                )
        }
    }
}
</script>

<style lang="less" scoped>

</style>