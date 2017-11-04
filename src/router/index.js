import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGround from '@/components/HelloGround'

Vue.use(Router)

export default new Router({
  routes: [

        { path: '/a', component: HelloWorld, alias: '/b' },
        { path: '/b', component: HelloGround }
  ]
})
