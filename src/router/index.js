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

  path:'/webSocket',
  name:'WebSocket',
  component:() => import('../views/WebSocket')
}]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router