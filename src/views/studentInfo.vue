<template>
  <div id="studentInfo" >
    <div style="width:400px;height:32%;padding-top:50px ">
      <dv-scroll-board :config="config" style="width:92%;height:2.9rem;margin-left: 10px" />
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
        ],
        rowNum: 5, //表格行数
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
  methods: {},
  created() {
    const _this = this;
    this.$axios.get("/stu_info/table/19").then(res => {
      _this.config= {data:res.data,   rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: false,
        columnWidth: [75,100,200],
        align: ["center"],
        carousel:'page'
      }

      _this.config = {..._this.config}
    });
  }
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
