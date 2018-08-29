import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Projects from '@/components/Projects'
// import WorkExp from '@/components/WorkExp'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Featured from '@/components/Featured'
import Portfolio from '@/components/Portfolio'

import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/featured',
      name: 'Featured',
      component: Featured
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
