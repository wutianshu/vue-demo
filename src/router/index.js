import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/page/order'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '',
      redirect: '/order'
    }
  ]
})
