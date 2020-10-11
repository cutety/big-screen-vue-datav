<template>
  <div>
    <div id="app" style="width:300px;height:300px">
      <div ref="chart" style="width:300px;height:320px"></div>
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
            data:[{"value":53,"name":"王"},{"value":52,"name":"李"},{"value":32,"name":"张"},{"value":24,"name":"刘"},{"value":337,"name":"其他"},{"value":1,"name":"唐"},{"value":1,"name":"湛"},{"value":1,"name":"佟"}],
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

      myCharts.setOption(option)


    }
  }
}
</script>

