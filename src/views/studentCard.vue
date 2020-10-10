<template>
  <div id="center">
    <div class="up">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        <div>
          <dv-digital-flop :config="item.number" style="width:1.35rem;height:.525rem;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleItem: [
        {
          title: "学院人数",
          number: {
            number: [0],
            toFixed: 0,
            content: "{nt}人",
          },
          style: {
            fontFamily: 'electronicFont'
          }
        },
        {
          title: "报到人数",
          number: {
            number: [0],
            toFixed: 0,
            content: "{nt}人"
          }
        },
        {
          title: "报道比",
          number: {
            number: [0],
            toFixed: 2,
            content: "{nt}%"
          },

        }
      ]
    };
  },
  components:{
  },
  created() {
    this.initWebSocket()
    const _this = this
    this.$axios.get("/stu_info/amount/20").then(response => {
        console.log("发送了一个get请求")
      _this.titleItem[0].number.number[0] = response.data
      _this.titleItem[0].number = {..._this.titleItem[0].number}
    })
  },
  destroyed: function () { // 离开页面生命周期函数
    this.websocketclose();
  },
  methods: {
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
      this.websock = new WebSocket("ws://39.97.178.218:8282/api/websocket/DPS007");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function (e) {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      let msg = e.data
      if(msg == "update") {
        console.log(msg)
        this.titleItem[1].number.number[0] = this.titleItem[1].number.number[0] + 1
        let checkInSum = parseFloat(this.titleItem[1].number.number[0])
        let sum = parseFloat(this.titleItem[0].number.number[0])
        this.titleItem[2].number.number[0] = checkInSum / sum * 100
        console.log(this.titleItem[2].number.number[0])
        this.titleItem[1].number = {...this.titleItem[1].number}
        this.titleItem[2].number = {...this.titleItem[2].number}

      }
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    }
  }
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 1.2rem;
    }
  }
  .down {
    width: 1200px;
    display: flex;
    height: 10rem;
  }
}
</style>
