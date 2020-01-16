import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = resolve => {
  require.ensure(
    ['../views/Home.vue'], 
    () => { resolve(require('../views/Home.vue')); }
  )
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/neo',
    name: 'neo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "neo" */ '../views/NeoTrack.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
