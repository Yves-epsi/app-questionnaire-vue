import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Reponses from '../views/Reponses.vue'
import Admin from '../views/Admin.vue'

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
    component: Questionnaire,
    props: true
  },
  {
    path: '/reponses',
    name: 'reponses',
    component: Reponses,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
