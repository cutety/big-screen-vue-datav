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
            number: [500],
            toFixed: 0,
            content: "{nt}人",
          }
        },
        {
          title: "报到人数",
          number: {
            number: [200],
            toFixed: 0,
            content: "{nt}人"
          }
        },
        {
          title: "报道比",
          number: {
            number: [200],
            toFixed: 0,
            content: "{nt}%"
          }
        }
      ]
    };
  },
  components:{
  },
  created() {
    const _this = this
    this.$axios.get("/stu_info/amount/19").then(response => {
      _this.titleItem[0].number.number[0] = response.data
      _this.titleItem[0].number = {..._this.titleItem[0].number}
    })
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
