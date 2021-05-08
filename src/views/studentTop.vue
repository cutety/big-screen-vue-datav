<template>
  <div>
    <div id="app" style="width:300px;height:250px">
<!--      <dv-scroll-board :config="config" style="width:270px;height:300px;margin-top: 55px;margin-left: 10px" />-->
      <img style="margin-top:50px;width:300px;height:250px" src="../img/logo.png"/>
    </div>
  </div>
</template>
<script>
export default {
 data() {
   return {
     header: ['列1', '列2'],
     config:{
       data: [
         ['<span style="color:#67e0e3;">年龄最小</span>', '<span style="color:#67e0e3;">16岁</span>'],
         ['<span style="color:#67e0e3;">老乡最多</span>', '<span style="color:#67e0e3;">河南南阳</span>'],
         ['<span style="color:#67e0e3;">校友最多</span>', '<span style="color:#67e0e3;">南阳市第五中学校</span>'],
         ['<span style="color:#67e0e3;">成绩最高</span>', '<span style="color:#67e0e3;">566分</span>'],
       ],
       index: false,
       columnWidth: [135,135],
       align: ['center'],
       oddRowBGC: "#0f1325", //奇数行
       evenRowBGC: "#171c33", //偶数行
     },

   }
 }

}
</script>

