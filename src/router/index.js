import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Reponses from '../views/Reponses.vue'

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
  },
  {
    path: '/reponses',
    name: 'reponses',
    component: Reponses
  }
]

const router = new VueRouter({
  routes
})

export default router
