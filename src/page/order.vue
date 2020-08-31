<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3"><CreateOrder v-bind:categories="categories" v-bind:workingModes="workingModes"></CreateOrder></el-col>
      <el-col :span="18" :offset="3"><QueryOrder></QueryOrder></el-col>
    </el-row>
  </div>

</template>

<script>
import CreateOrder from '@/components/order/CreateOrder'
import QueryOrder from '@/components/order/QueryOrder'
export default {
  name: 'order',
  components: {
    CreateOrder,
    QueryOrder
  },
  data () {
    return {
      categories: [],
      workingModes: []

    }
  },
  mounted () {
    this.getDict()
  },
  methods: {
    getDict: function () {
      this.$http.get('/common/dict/config').then(res => {
        if (res.body['data']['status'] === 0) {
          console.log(res.body['data']['message'])
        } else {
          console.log(res.body['data']['crm']['category']['option'])
          console.log(res.body['data']['crm']['workingMode']['option'])
          this.categories = res.body['data']['crm']['category']['option']
          this.workingModes = res.body['data']['crm']['workingMode']['option']
        }
      }, function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
