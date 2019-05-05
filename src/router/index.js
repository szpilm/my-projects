import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import phone from '../views/phone.vue'
import tablet from '../views/tablet.vue'
import computer from '../views/computer.vue'
import tabs from '../components/tabs.vue'
import about from '../components/about.vue'
import center from '../components/elementCenter.vue'
import user from '../components/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children:[
        {
          path: 'phone',
          component: phone
        },
        {
          path: 'tablet',
          component: tablet
        },
        {
          path: 'computer',
          component: computer
        },
        //当进入到home时,显示默认组件
        {
          path: '',
          component: phone
        }
      ]
    },
    {
      path: '/tabs',
      component: tabs
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/user/:id',
      component: user
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
