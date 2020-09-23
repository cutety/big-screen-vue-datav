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
          {
            name: '大数据',
            value: 180
          },
          {
            name: '计科',
            value: 120
          },
          {
            name: '软件工程',
            value: 90
          },
          {
            name:'网络工程',
            value: 60
          },
          {
            name:'物联网',
            value:30
          }
        ]
      }
    }
  }

}
</script>