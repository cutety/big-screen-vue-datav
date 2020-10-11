<template>
  <div class="hello">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div ref="mapbox" style="height:850px;width:1200px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import center from "@/views/center";
const option = {
  color:['transparent'],
  title: {
    text: '人员分布地图',
    left: 'center',
    padding:15,
    textStyle: {
      fontWeight: "normal",
      color: "#3de7c9",
      fontSize: 28
    },
    sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
  },
  itemStyle: {
    borderColor:'transparent'
  },
  series: [{
    name: '人数',
    type: 'map',//渲染地图
    map: 'china',//渲染中国地图
    label: {
      // 控制对应地区的汉字
      show: true,
      fontSize: 16
    },
    // 地图区域的颜色。
    itemStyle: {
      areaColor: 'rgba(248,248,255)',
    },
    // 地图放大倍数
    zoom: 1.2,
    emphasis: {
      // 控制鼠标滑过的背景色及字体颜色
      label: {
        color: '#fff',
        fontSize: 18,
      },
      itemStyle: {
        areaColor: '#83b5e7'
      }
    },
    data: [],//用来展示后台数据{name:'',value:''}
    roam: true,//滚轮滚动放大缩小
  }],
  // 视觉映射组件
  visualMap: [{
    type: 'piecewise',//分段型视觉映射组件
    show: true,
    splitNumber: 4,//平均切分成几段,默认是5段
    pieces: [ //分段
      {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
      {min: 1000, max: 9999},
      {min: 100, max: 999},
      {min: 10, max: 99},
      // {min: 1, max: 9, label: '1 到 9（自定义label）', color: 'grey'},
      {min: 1, max: 9},
      {max: 1}     // 不指定 min，表示 min 为无限大（-Infinity）。
    ],
    align: 'left',//auto自动决定，left图左字右，right图右字左
    orient: 'vertical',//vertical竖直，horizontal水平
    inRange: { //定义 在选中范围中 的视觉元素
      symbol: 'rect', //图示形状
      color: ['#00BFFF', '#0000CD']//颜色  ffc0b1-9c0505 自动分
    },
  }],
  tooltip: {  //显示提示框组件
    trigger: 'item'
  },
  toolbox: {  //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
};
export default {
  name: 'HelloWorld',
  mounted() {
    this.getData()
    // 通过 echarts.init 方法初始化一个 echarts 实例
    this.mychart = echarts.init(this.$refs.mapbox);
    // 通过 setOption 方法生成一个简单的柱状图
    this.mychart.setOption(option)
  },
  methods: {
    getData() {
    /*  jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=15880892522427', {}, (err, data) => {
        if (!err) {
          //代表请求数据成功
          console.log(data.list);
          let list = data.data.list.map(item => ({name: item.name, value: item.value}))
          option.series[0].data = list;
          // 赋值完重新初始化
          this.mychart.setOption(option)
        }
      })*/
      this.$axios.get("/stu_info/province/20").then(data => {
        //代表请求数据成功
        console.log(data.data)
        let list=data.data.map(item => ({name:item.name, value: item.value}))
       /* let from = ""
        list.map(item=>{
          from += item.name+"、"
        })
        console.log(from)*/
        console.log(list)
        option.series[0].data=list;
        // 赋值完重新初始化
        this.mychart.setOption(option)
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>