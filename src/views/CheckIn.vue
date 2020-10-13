<template>
  <div>
    <div class="container">
      <el-row class="form-body">
        <h1 style="text-align: center">信息技术学院</h1>
        <br/>
        <h2 style="text-align: center">新生报到</h2>
        <br/>
        <el-form ref="form" :model="checkInForm" label-width="0px">
          <el-form-item class="form-item">
            <el-input placeholder="请输入学号" v-model="checkInForm.stuId"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入姓名" v-model="checkInForm.stuName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="checkInForm.major" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="isdisabled" class="form-confirm">提交</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isdisabled:false,
      checkInForm:{
        stuId: "",
        stuName: "",
        major: ""
      },
      options: [{
        value: '软件工程',
        label: '软件工程'
      }, {
        value: '计算机科学与技术',
        label: '计算机科学与技术'
      }, {
        value: '物联网工程',
        label: '物联网工程'
      }, {
        value: '数据科学与大数据技术',
        label: '数据科学与大数据技术'
      }],
    }
  },
  computed:{

  },
  methods: {
    onSubmit() {
      const _this = this;
      this.$axios.get("/checkIn",{
        params:{
          'stuId':this.checkInForm.stuId,
          'stuName':this.checkInForm.stuName,
          'major':this.checkInForm.major,
        }
      }).then(res => {
        if(res.data == "suc") {
          this.$message({
            showClose: true,
            message: '恭喜你，报道成功，洛师的美好生活在等待着你！你可以关闭这个页面了',
            type: 'success',
            duration:0,
            offset:120
          });
          //_this.isdisabled = true;
        } else if(res.data == "fail") {
          this.$message({
            showClose: true,
            message: '请检查学号是否有误',
            type: 'error'
          });
        } else {
          this.$message({
            showClose: true,
            message: '请勿重复提交',
            type: 'error'
          });
        }
      })
    }
  }
}
</script>

<style scoped>

.container {
  height: 100%;
  width: 100%;
/*  background-image: url("../../static/HomeMask.jpg");*/
  background-size: cover;
  position: fixed;
  left: 0px;
  top: 0px;
  padding-top: 30px;
}

.form-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 10px;
  margin: 0 auto;
  width: 25%;
  min-width: 300px;
  padding: 30px 30px 15px 30px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.9);
}

.form-confirm {
  width: 100%;
  background-color: #585858;
  border: 2px solid #484848;
  border-radius: 4px;
}
</style>

</style>
