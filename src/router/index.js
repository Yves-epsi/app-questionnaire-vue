import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Questionnaire from '../views/Questionnaire.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire
  }
]

const router = new VueRouter({
  routes
})

export default router
