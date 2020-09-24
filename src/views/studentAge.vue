<template>
  <div>
    <div id="app" style="width:280px;height:33%;margin-left:20px;padding-top:50px">
      <div id="main" style="width:280px;height:300px"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
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
      };
      this.$axios.get("/stu_info/age_distribution/19").then(response => {
        let ageData = response.data
        ageData.forEach((item) => {
          option.xAxis.data.push(item.age.toString())
          option.series[0].data.push(item.amount)
        })
        option = { ...option}
        console.log(option.xAxis.data)
        console.log(option.series[0].data)
      })
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>
