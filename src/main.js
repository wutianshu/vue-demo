// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/base.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// import axios from 'axios'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false

// Vue.prototype.$http = axios
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
})
