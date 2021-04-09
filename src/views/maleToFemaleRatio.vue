<template>
  <div>
    <div style="width:400px;height:32%;padding-top:20px ">
    <dv-active-ring-chart :config="config" style="width:400px;height:300px;"/>
    </div>
  </div>
</template>
<script>
import studentsService from "@/service/studentsService";
export default {
  data() {
    return {

      config:{
        data: [
          {
            name: '男生',
            value: 11,
          },
          {
            name: '女生',
            value: 11,
          }
        ],
        color:['#1E90FF','#FFB6C1'],
        digitalFlopStyle: {
          fontSize: 15,
          fill: '#fff'
        }
      }
    }
  },
  created() {
    this.getMaleAndFemaleAmount()
  },
  methods: {
    async getMaleAndFemaleAmount() {
      studentsService.updateGrade(19)
      const { data : res} = await studentsService.getMaleAndFemaleAmount()
      this.config.data[0].value = res.data.male
      this.config.data[1].value = res.data.female
      this.config = { ...this.config }
    }
  }

}
</script>
