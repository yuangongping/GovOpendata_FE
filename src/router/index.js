import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage'
import DetailInfo from '../pages/DetailInfo'
import ListPage from '../pages/ListPage'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
      {
        path: '/',
        name: 'IndexPage',
        component: IndexPage
      },
      {
        path: '/:government',
        name: 'ListPage',
        component: ListPage
      },
      {
        path: '/:government/:dataset',
        name: 'DetailInfo',
        component: DetailInfo
      },

    ]
  })
  
