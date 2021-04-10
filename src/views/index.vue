<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;"/>
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;"/>
            <div class="title">
              <span class="title-text">信息技术学院</span>
              <dv-decoration-6
                  class="title-bototm"
                  :reverse="true"
                  :color="['#50e3c2', '#67a1e5']"
                  style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
                :reverse="true"
                :color="['#568aea', '#000000']"
                style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);"/>
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
                class="react-right ml-4"
                style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text">
               {{grade}}级报到信息可视化
              </span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <span class="text colorBlue">洛阳师范学院</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">学生信息可视化</span>
            </div>
            <div
                class="react-left mr-4"
                style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="  content-box">
            <dv-border-box-11 title="报到信息">
              <student-info/>
            </dv-border-box-11>
            <dv-border-box-11 title="男女比例">
              <maleToFemaleRatio/>
            </dv-border-box-11>
            <dv-border-box-11 title="专业热度排行">
              <majorRank/>
            </dv-border-box-11>
          </div>
          <div class="mid-box">
            <!-- 卡片 -->
            <dv-border-box12>
              <student-card/>
            </dv-border-box12>
            <!-- 地图 -->
            <dv-border-box10>
              <student-map/>
            </dv-border-box10>
            <!-- 中间 -->
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-11 title="院系之最">
              <studentTop/>
            </dv-border-box-11>
            <dv-border-box-11 title="年龄分布">
              <studentAge/>
            </dv-border-box-11>
            <dv-border-box-11 title="百家姓">
              <firstname-pie/>
            </dv-border-box-11>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import {formatTime} from '../utils/index.js'
import studentsService from "@/service/studentsService";
import majorRank from "./majorRank";
import studentInfo from "./studentInfo";
import maleToFemaleRatio from "./maleToFemaleRatio";
import studentTop from "@/views/studentTop";
import studentAge from "@/views/studentAge";
import studentCard from "@/views/studentCard";
import studentMap from "@/views/studentMap";
import firstnamePie from "@/views/firstnamePie";
import lastnameGraph from "@/views/lastnameGraph";
import sameBirthday from "@/views/sameBirthday";

export default {
  data() {
    return {
      grade:'',
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    majorRank,
    studentInfo,
    maleToFemaleRatio,
    studentTop,
    studentAge,
    studentCard,
    studentMap,
    firstnamePie,
    lastnameGraph,
    sameBirthday

  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
    this.getGrade()
  },
  methods: {
    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    getGrade() {
      this.grade = studentsService.getGrade()
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
</style>
