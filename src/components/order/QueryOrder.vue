<template>
  <div>
    <el-card class="box-card" v-loading="loadingFlag" style="width: 100%">
      <div slot="header" class="clearfix">
        <span>查询订单</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
        <div style="margin: 20px;"></div>
      <el-form :model="orderCreateform" :rules="rules" ref="orderCreateform" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机" prop="phone">
            <el-input v-model="orderCreateform.phone"></el-input>
          </el-form-item>
          <el-form-item label="环境" prop="env">
            <el-select v-model="orderCreateform.env" placeholder="请选择环境">
              <el-option label="stable" value="stable"></el-option>
              <el-option label="betaa" value="betaa"></el-option>
              <el-option label="betab" value="betab"></el-option>
              <el-option label="betac" value="betac"></el-option>
              <el-option label="betad" value="betad"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单号" prop="orderId">
            <el-input v-model="orderCreateform.orderId"></el-input>
          </el-form-item>
          <el-form-item label="从服务端返回数据" prop="msg">
            <el-input v-model="orderCreateform.msg"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('orderCreateform')">立即创建</el-button>
            <el-button @click="resetForm('orderCreateform')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-card class="box-card">
          <el-row :gutter=20>
            <el-col :span="12">
              <el-input placeholder="" v-model="results.result1" :disabled="true">
                <template slot="prepend">返回结果1</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <el-input placeholder="" v-model="results.result2" :disabled="true">
                <template slot="prepend">返回结果2</template>
              </el-input>
            </el-col>
          </el-row>
        </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'QueryOrder',
  data () {
    return {
      orderCreateform: this.initForm(),
      rules: {
        phone: [
          { required: true, message: '请输入电话号码！', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码！', trigger: 'blur' }
        ]
      },
      loadingFlag: false,
      results: this.initResults()
    }
  },
  mounted () {
    this.getMsg()
  },
  methods: {
    getMsg: function () {
      this.$http.get('/client/test').then(res => {
        this.orderCreateform.msg = res.body['message']
        console.log(res)
      }, function (res) {
        console.log(res)
      })
    },
    loadingHandle: function () {
      this.loadingFlag = !this.loadingFlag
    },
    initForm: function () {
      return {
        phone: '15377319326',
        env: 'betaa',
        orderId: '1000000001',
        msg: ''
      }
    },
    initResults: function () {
      return {
        result1: '',
        result2: ''
      }
    },
    submit: function () {
      this.loadingHandle()
      this.$http.get('/api/tools/smscode', {params: {'phoneno': this.form.input1, 'env': 'offline'}}).then(res => {
        this.form.result = res.body['cstest_data'][0]['msgCode']
        this.loadingHandle()
        console.log(res)
      }, function (res) {
        console.log(res)
        this.loadingHandle()
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loadingHandle()
          this.$http.get('/api/tools/smscode', {params: {'phoneno': this.orderCreateform.phone, 'env': 'offline', 'msg': this.orderCreateform.msg}}).then(res => {
            this.results.result1 = res.body['cstest_data'][0]['msgCode']
            this.loadingHandle()
            console.log(res)
          }, function (res) {
            console.log(res)
            this.loadingHandle()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-select .el-input {
    width: 110px;
  }
  .button {
    margin-top: 10px;
  }
</style>
