import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue')
},{

  path:'/checkIn',
  name:'CheckIn',
  component:() => import('../views/CheckIn')
},{

  path:'/gradeChooser',
  name:'GradeChooser',
  component:() => import('../views/gradeChooser')
},{

  path:'/webSocket',
  name:'WebSocket',
  component:() => import('../views/WebSocket')
}]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
