import Vue from 'vue'
import Router from 'vue-router'
import EBook from '@/EBook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'ebook'
    },
    {
      path: '/ebook',
      component: EBook
    }
  ]
})
