import Vue from 'vue'
import Router from 'vue-router'
import ReadContent from '@/components/ReadContent'
import BackToTop from '@/components/BackToTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReadContent',
      component: ReadContent
    }
    
  ]
})