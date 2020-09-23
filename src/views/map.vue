<template>
  <div class="content-box">
    <!-- 通过vue的ref获取节点，方便初始化 -->
    <!-- echart容器div必须设置高度，否则不显示 -->
    <div ref="echart" style="height:745px;"></div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      // 获取DOM节点并初始化
      let chart = this.$echarts.init(this.$refs.echart);
      // 编写echart参数
      let option = {
        amap: {
          zoom: 10,
          zooms: [3, 20],
          mapStyle: 'amap://styles/darkblue', // 地图主题
          center: [110, 33], // 中心点
          lang: 'en',
          resizeEnable: true
        },
        animation: false,
        series: [],
        tooltip: { return: 'shanghai' }
      };
      // 设置图表的参数
      chart.setOption(option);
    }
  }
};
</script>
