<template>
  <div>
    <div id="app" style="width:1rem;height:0.33rem;margin-left:20px;padding-top:50px">
      <div ref="chart" style="width:280px;height:300px"></div>
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
          text: ""
        },
        tooltip: {},
        legend: {
          data: ["人数"],
          textStyle:{
            color:'#48D1CC',
          }
        },
        xAxis: {
          data: [],
          axisLine:{
            lineStyle:{
              color:'#48D1CC',
              width:1
            }
          }
        },
        yAxis: {
          axisLine:{
            lineStyle:{
              color:'#48D1CC',
              width:1
            }
          }
        },
        series: [
          {
            name: "人数",
            type: "bar",
            data: [],
            itemStyle:{
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    fontSize: 16
                  }
                }
              }
            }
          }
        ],
        color:'#48D1CC'
      }
      this.getAgeDistribution().then(res => {
        option.xAxis.data = res.data.map(r => r.name)
        option.series[0].data=res.data.map(r => r.value)
        myCharts.setOption(option)
      })
    },
    async getAgeDistribution() {
      const { data : res} = await studentsService.getAgeDistribution()
      return res
    }
  }
}
</script>

