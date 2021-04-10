<template>
  <div id="studentInfo" >
    <div style="width:400px;height:32%;padding-top:50px ">
      <dv-scroll-board :config="config" ref="scrollBoard" style="width:92%;height:2.9rem;margin-left: 10px" />
    </div>
  </div>
</template>

<script>

import studentsService from "@/service/studentsService";
import { formatTime } from '../utils/index.js'
export default {
  data() {
    return {
      config: {
        header: ["姓名", "专业", "报道时间"],
        data: [
        ],
        rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: false,
        columnWidth: [75, 150, 200],
        align: ["center"],
        carousel:'page'
      },

    };
  },
  components: {},
  mounted() {},
  destroyed: function () { // 离开页面生命周期函数
    this.websocketclose();
  },
  methods: {
    doUpdate (rows, index) {
      this.$refs['scrollBoard'].updateRows(rows, index)
    },
    collapse: function () {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.iconClass = "cebianlanzhankai";
      } else {
        this.iconClass = "cebianlanshouhui";
      }
    },
    initWebSocket: function () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket("ws://localhost:8282/api/websocket/info");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function (e) {
      console.log(e.data)
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      let len = this.config.data.length
      let msg = JSON.parse(e.data)
      let newData = msg;
      this.doUpdate(newData,len)
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    },
    async getCheckinInfo() {
      const { data : res} = await studentsService.getCheckinInfo()
      const list = []
      for (let i in res.data) {
        let arr = []
        arr.push(res.data[i].stu_name)
        arr.push(res.data[i].major)
        let date = formatTime(res.data[i].checkin_time, "yyyy-MM-dd HH:mm:ss")
        arr.push(date)
        list.push(arr)
      }
      this.config= {
          header: ["姓名", "专业", "报道时间"],
          data:list,
          rowNum: 5, //表格行数
          headerHeight: 35,
          headerBGC: "#0f1325", //表头
          oddRowBGC: "#0f1325", //奇数行
          evenRowBGC: "#171c33", //偶数行
          index: false,
          columnWidth: [75, 150, 200],
          align: ["center"],
          carousel:'page'
        }
      this.config = {...this.config}
    }
  },
  created() {
    this.getCheckinInfo()
  },
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
