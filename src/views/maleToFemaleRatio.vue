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
      activeTimeGap: 3000,
      config:{
        data: [
          {
            name: '男生',
            value: 39,

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
  }

}
</script>