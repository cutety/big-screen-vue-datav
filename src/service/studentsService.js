import request from "@/utils/request";

let grade = 17

// getMaleAndFemaleAmount 获取男女数量
const getMaleAndFemaleAmount = () => {
  return request.get(`students/gender/amount/${grade}`)
}

// getMajorRank 获取专业热度排行
const getMajorRank = () => {
  return request.get(`students/major/rank/${grade}`)
}

// getAgeDistribution 获取年龄分布
const getAgeDistribution = () => {
  return request.get(`students/age/distribution/${grade}`)
}

// getStudentsAmount 获取学生数量
const getStudentsAmount = () => {
  return request.get(`students/amount/${grade}`)
}

// getStudentsCheckinAmount 获取报到学生数量
const getStudentsCheckinAmount = () => {
  return request.get(`students/checkin/amount/${grade}`)
}

// getFirstnamePie 获取姓氏
const getFirstnamePie = () => {
  return request.get(`students/firstname/${grade}`)
}

// getProvince 获取省份
const getProvince = () => {
  return request.get(`students/province/${grade}`)
}
// getCheckinInfo 获取报到信息
const getCheckinInfo = () => {
  return request.get(`students/checkin/info/${grade}`)
}

// getGradeList 获取年级列表
const getGradeList = () => {
  return request.get(`students/grade/list`)
}

const getGrade = () => {
  return grade
}
const updateGrade = (param) => {
  grade = param
}

export default {
  grade,
  getGrade,
  getMaleAndFemaleAmount,
  updateGrade,
  getMajorRank,
  getAgeDistribution,
  getStudentsAmount,
  getStudentsCheckinAmount,
  getFirstnamePie,
  getProvince,
  getCheckinInfo,
  getGradeList,

}
