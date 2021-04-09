<template>
  <div>
    <div style="width:400px;height:32%;padding-top:55px">
      <dv-scroll-ranking-board :config="config" style="width:280px;height:3.5rem;margin-left: 50px"/>
    </div>
  </div>
</template>
<script>
import studentsService from "@/service/studentsService";

export default {
  data() {
    return {
      config: {
        rowNum: 6,
        data: []
      }
    }
  },
  created() {
    this.getMajorRank()
  },
  methods: {
    async getMajorRank() {
      const {data: res} = await studentsService.getMajorRank()
      // let rank = []
      // for (let i = 0;i < res.data.length; i++) {
      //   let arr = []
      //   arr.push(res.data[i].Name)
      //   arr.push(res.data[i].Value)
      //   rank.push(arr)
      // }
      // console.log(rank)
      this.config = {data: res.data}
      this.config.data = {...this.config.data}
    }
  }

}
</script>
