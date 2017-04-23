import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Results from '@/components/Results'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})
