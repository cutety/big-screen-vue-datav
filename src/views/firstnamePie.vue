<template>
  <div>
    <div id="app" style="width:300px;height:300px">
      <div ref="chart" style="width:300px;height:320px"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import studentsService from "@/service/studentsService";
export default {

  mounted() {
    this.drawChart()
  },
  created() {
  },
  methods: {
    drawChart() {
      let myCharts = echarts.init(this.$refs.chart)
      let option = {
        title: {
          subtext: '',
          left: 'center'
        },
        tooltip: {trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'},
        toolbox:{
          feature:{
            saveAsImage:{}
          }
        },

        color:['#00fa9a', '#48D1CC','#EE82EE','#DC143C','#4169E1','#778899','#FF6347','#8B4513'],
        series: [
          {
            name: "人数",
            type: "pie",
            radius: '55%',
            center: ['50%', '60%'],
            data:[],
            avoidLabelOverlap: true,
            label:{
              normal:{
                formatter: '{b}:{c}\n{d}%',

              }
            },
            emphasis: {
             /* itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }*/
            },
            itemStyle:{
              /*shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'*/
            }
          }
        ],
      }
      this.getFirstnamePie().then(res => {
        option.series[0].data = res.data
        myCharts.setOption(option)
      })



    },
    async getFirstnamePie() {
      const { data : res} = await studentsService.getFirstnamePie()
      return res
    }
  }
}
</script>

