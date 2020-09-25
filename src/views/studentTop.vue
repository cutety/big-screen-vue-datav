<template>
  <div style="width: 300px;height: 300px">
    <dv-scroll-board :config="config" style="width:300px;height:300px;padding-top: 50px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        oddRowBGC:'#00000',
        evenRowBGC:'#00000',
        data: [
          ['<span style="color:#FF7F50;">星座最多</span>', '<span style="color:#FF7F50;">行2列2</span>'],
          ['<span style="color:#FF7F50;">年龄最小</span>', '<span style="color:#FF7F50;">行2列2</span>'],
          ['<span style="color:#FF7F50;">成绩最高</span>', '<span style="color:#FF7F50;">行2列2</span>'],
        ],
        columnWidth: [200,200],
        align: ['center']
      }
    }
  }

}
</script>
