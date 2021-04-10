<template>
  <div class="container">
    <span>请选择要看的年级:</span>
    <button v-for="item in gradeList" :key="item" class="grades-button" @click="changeGrade(item)">{{ item }}</button>
  </div>
</template>

<script>
import studentsService from "@/service/studentsService";

export default {
  data() {
    return {
      gradeList: []
    }
  },
  created() {
    this.getGradeList()
  },
  methods: {
    async getGradeList() {
      const {data: res} = await studentsService.getGradeList()
      this.gradeList = res.data
    },
    changeGrade(item) {
      studentsService.updateGrade(item)
      this.$router.push('/')
    }
  }
}
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  top: 50%;
  left: 40%;
  background-size: cover;
  position: fixed;
  padding-top: 30px;
}

.grades-button {
  /* 文字颜色 */
  color: #0099CC;
  /* 清除背景色 */
  background: transparent;
  /* 边框样式、颜色、宽度 */
  border: 2px solid #0099CC;
  /* 给边框添加圆角 */
  border-radius: 6px;
  /* 字母转大写 */
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}

.grades-button:hover {
  background-color: #008CBA;
  color: white;
}
</style>
