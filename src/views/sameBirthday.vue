<template>
  <div>
    <div id="app" style="width:850px;height:1200px">
      <div ref="chart" style="width:850px;height:1200px"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
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
        toolbox:{
          feature:{
            saveAsImage:{}
          }
        },
        legend: {
          data: ["人数"],
          textStyle:{
            color:'black',
          }
        },
        xAxis: {
          data: [],
          axisLine:{
            lineStyle:{
              color:'rgb(149 178 215)',
              width:1
            }
          },
          axisLabel:{
            interval: 0,
            rotate: 60,
          },
        },
        yAxis: {
          axisLine:{
            lineStyle:{
              color:'rgb(149 178 215)',
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
        color:'rgb(149 178 215)'
      }
      console.log("initializing")
      let sameBirthday = [{"value":5,"name":"01-03"},{"value":5,"name":"01-18"},{"value":4,"name":"01-21"},{"value":4,"name":"02-06"},{"value":5,"name":"02-07"},{"value":4,"name":"02-17"},{"value":6,"name":"03-09"},{"value":4,"name":"03-18"},{"value":4,"name":"03-27"},{"value":4,"name":"04-17"},{"value":4,"name":"06-06"},{"value":4,"name":"06-29"},{"value":4,"name":"07-05"},{"value":4,"name":"07-18"},{"value":4,"name":"08-05"},{"value":4,"name":"09-28"},{"value":4,"name":"10-03"},{"value":4,"name":"10-17"},{"value":4,"name":"11-03"}]
        option.xAxis.data = sameBirthday.map(r => r.name.toString())
        option.series[0].data=sameBirthday.map(r => r.value)
        myCharts.setOption(option)


    }
  }
}
</script>

