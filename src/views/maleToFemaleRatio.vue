<template>
  <div>
    <dv-active-ring-chart :config="config" style="width:300px;height:33%;padding-top:20px"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineWidth: 30,
      activeRadius: "80%",
      radius: "75%",
      activeTimeGap: 2000,
      config:{
        data: [
          {
            name: '男生',
            value: 39
          },
          {
            name: '女生',
            value: 11

          }
        ],
        digitalFlopStyle: {
          fontSize: 20,
          fill: '#fff'
        }
      }
    }
  }

}
</script>