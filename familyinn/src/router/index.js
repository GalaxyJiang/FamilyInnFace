import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve),
      redirect:"/fristpage",
      children: [
        {
          path: '/fristpage',
          name: 'fristpage',
          component: resolve => require(['@/components/login/FristPage.vue'], resolve),
        },
        {
          path: '/adminlogin',
          name: 'adminlogin',
          component: resolve => require(['@/components/login/AdminLogin.vue'], resolve),
        },
        {
          path: '/userlogin',
          name: 'userlogin',
          component: resolve => require(['@/components/login/UserLogin.vue'], resolve),
        },
        
      ]
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: resolve => require(['@/components/adminpage'], resolve),
    },
    {
      path: '/userpage',
      name: 'userpage',
      component: resolve => require(['@/components/userpage'], resolve),
    },
  ]
})
