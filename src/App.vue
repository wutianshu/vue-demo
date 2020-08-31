<template>
  <div id="app">
    <el-container>
      <el-header>
        <NavTool></NavTool>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer><small>测试数据%测试数据</small></el-footer>
    </el-container>
  </div>
</template>

<script>
import NavTool from '@/components/nav-tool'
import Order from '@/page/order'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    NavTool,
    Order
  }
}
</script>

<style scoped>
  .el-footer {
    background-color: grey;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
