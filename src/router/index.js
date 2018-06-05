import Vue from 'vue'
import Router from 'vue-router'
import NewManage from '../components/NewManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'NewManage',
      component:NewManage
    }
  ]
})
