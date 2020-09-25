<template>
  <div>
    <div style="width:400px;height:32%;padding-top:55px">
      <dv-scroll-ranking-board :config="config" style="width:280px;height:3.5rem;margin-left: 50px"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        rowNum: 6,
        data: [

        ]
      }
    }
  },
  created() {
    const _this = this;
    this.$axios.get("/apply_info/major_rank/19").then(response => {
      let rank = response.data
      console.log(rank)

      _this.config = {data:rank}
      _this.config.data = {..._this.config.data}
      console.log(_this.config.data)
    })
  }

}
</script>
