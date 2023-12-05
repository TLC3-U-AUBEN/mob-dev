import Vue from 'vue'
import VueRouter from 'vue-router'
import ClassListView from '../views/ClassListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'classe',
    component: ClassListView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
