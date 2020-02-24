import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import Layout from './layout/Layout'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
  router,
  components: { Layout },
  template: '<Layout/>'
}).$mount('#app')
