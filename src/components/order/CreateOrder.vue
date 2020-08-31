<template>
  <div>
    <el-card class="box-card" v-loading="loadingFlag" style="width: 100%">
      <div slot="header" class="clearfix">
        <span>创建订单</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <!--<div style="margin: 20px;"></div>-->
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
              <el-option label="offline" value="offline"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="省份" prop="provice">
            <el-select v-model="orderCreateform.provice" placeholder="请选择省份">
              <el-option v-for="item in provices" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="品类" prop="category">
            <el-select v-model="orderCreateform.category" placeholder="请选择品类">
              <el-option v-for="item in categories" :key="item.value" :label="item.text" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作模式" prop="workingMode">
            <el-radio-group v-model="orderCreateform.workingMode">
              <el-radio v-for="item in workingModes" v-bind:key="item.value" v-bind:label="item.value">
                {{ item.text }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="订单号" prop="orderId">
            <el-input v-model="orderCreateform.orderId"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('orderCreateform')">立即创建</el-button>
            <el-button @click="resetForm('orderCreateform')">重置</el-button>
          </el-form-item>
        </el-form>
      <p>
        <i v-show="errorFlag" class="el-icon-warning" style="color: #F56C6C"></i>
        <small v-show="errorFlag" style="color: #F56C6C">{{ errorMsg }}</small>
      </p>
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
  name: 'CreateOrder',
  props: ['categories', 'workingModes'],
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
      results: this.initResults(),
      provices: [],
      errorMsg: '',
      errorFlag: false
    }
  },
  mounted () {
    this.getProvices()
  },
  methods: {
    loadingHandle: function () {
      this.loadingFlag = !this.loadingFlag
    },
    initForm: function () {
      return {
        phone: '15377319326',
        env: 'betaa',
        orderId: '1000000001',
        provice: '',
        category: '',
        workingMode: ''
      }
    },
    getProvices: function () {
      this.$http.get('/common/province/all').then(res => {
        this.provices = res.body['data']
        console.log(res)
      }, function (res) {
        console.log(res)
      })
    },
    initResults: function () {
      return {
        result1: '',
        result2: ''
      }
    },
    initError: function () {
      this.errorMsg = ''
      this.errorFlag = false
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.initError()
          this.loadingHandle()
          this.$http.post(
            '/api/tools/smscode',
            {
              'phoneno': this.orderCreateform.phone,
              'env': this.orderCreateform.env,
              'provice': this.orderCreateform.provice,
              'category': this.orderCreateform.category,
              'workingMode': this.orderCreateform.workingMode,
              'orderId': this.orderCreateform.orderId
            },
            {emulateJSON: true}
          ).then(res => {
            if (res.body['cstest_status'] === false) {
              this.errorMsg = res.body['cstest_message']
              this.loadingHandle()
              this.errorFlag = true
              console.log(res.body['cstest_message'])
            } else {
              this.results.result1 = res.body['cstest_data'][0]['msgCode']
              this.loadingHandle()
              console.log(res)
            }
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
