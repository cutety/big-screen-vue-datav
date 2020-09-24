<template>
  <div>
    <div style="width:400px;height:32%;padding-top:20px ">
    <dv-active-ring-chart :config="config" style="width:400px;height:300px;"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineWidth: 30,
      activeRadius: "90%",
      radius: "80%",
      activeTimeGap: 5000,
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
    const _this = this
    this.$axios.get("/stu_info/male_and_female_amount").then(response => {
      _this.config.data[0].value = response.data.male
      _this.config.data[1].value = response.data.female
      _this.config = { ..._this.config }
    })
  }

}
</script>
