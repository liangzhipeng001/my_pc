import Vue from 'vue'
import Router from 'vue-router'
import {
  resolve
} from 'url';


Vue.use(Router)

export default new Router({
  routes: [{
      path: "/home",
      component: resolve => require(['@/pages/Home.vue'], resolve)
    },
    {
      path: "/about",
      component: resolve => require(['@/pages/About.vue'], resolve)
    },
    {
      path: "/product",
      component: resolve => require(['@/pages/Product.vue'], resolve)
    },
    {
      path: "/contact",
      component: resolve => require(['@/pages/Contact.vue'], resolve)
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
