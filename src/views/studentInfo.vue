<template>
  <div id="centreRight1">
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:6.5rem;height:33%;padding-top:40px " />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["姓名", "学号", "班级"],
        data: [
          ['陈昌源', '171164244', '嵌入式应用开发'],
          ['樊宇', '171164242', '计算机技术与科学'],
          ['王振铎', '171164241', '数据科学与大数据技术'],
          ['梁琼珂', '171164243', '人工智能'],
          ['陈昌源', '171164244', '嵌入式应用开发'],
          ['樊宇', '171164242', '计算机技术与科学'],
          ['王振铎', '171164241', '数据科学与大数据技术'],
          ['梁琼珂', '171164243', '人工智能'],
          ['陈昌源', '171164244', '嵌入式应用开发'],
          ['樊宇', '171164242', '计算机技术与科学'],
          ['王振铎', '171164241', '数据科学与大数据技术'],
          ['梁琼珂', '171164243', '人工智能']
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: false,
        columnWidth: [75,100,200],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight1 {

  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.55rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>