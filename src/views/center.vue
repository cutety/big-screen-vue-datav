<template>
  <div class="up">
    <!--bg-color-black 遮罩-->
    <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
      <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
      <div>
        <dv-digital-flop :config="item.number" style="width:1.35rem;height:.525rem;" />
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

  }
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  height: 1.2rem;
  .up {
    width: 15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 1.2rem;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 1.2rem;
    }
  }

}
</style>
