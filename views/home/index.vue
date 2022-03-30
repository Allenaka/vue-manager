<template>
    <div>
        <el-row class="home" :gutter="20">
            <el-col :span="6" v-for="item in reviewList" :key="item.id">
                <ReviewItem :data="item" @click.native="jump(item.to)"></ReviewItem>
            </el-col>
        </el-row>
        <el-row class="home">
            <el-col>
                <div id="stackedLine"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ReviewItem from 'components/ReviewItem'
import {reviewData, statisticData} from '../../api/data'
import * as echarts from 'echarts';
export default {
    name: 'home',
    components: {
        ReviewItem
    },
    data() {
        return {
            reviewList: [],
            statisticList: [],
        }
    },
    created() {
        this.requestInfo();
        this.requestStatistic();
    },
    methods: {
        requestInfo() {
            reviewData()
                .then(
                    res => {
                        this.reviewList = res.data.data;
                    }
                )
        },
        requestStatistic() {
            statisticData()
                .then(
                    res => {
                        this.statisticList = res.data.data;
                        this.initLineCharts();
                    }
                )
        },
        initLineCharts() {
            var chartDom = document.getElementById('stackedLine');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: this.statisticList.map(item => item.label)
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        magicType: { type: ['line', 'bar'] },
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: Object.keys(this.statisticList[0].history)
                },
                yAxis: {
                    type: 'value'
                },
                series: this.statisticList.map(item => {
                    return {
                        name: item.label,
                        type: 'line',
                        data: Object.values(item.history)
                    }
                })
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="less" scoped>
    .home {
        margin-bottom: 20px;
    }
    #stackedLine {
        width: 100%;
        height: 500px;
        background: #fff;
        border-radius: 10px;
    }
</style>