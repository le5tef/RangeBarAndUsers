import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RangeBar from '../views/RangeBarView.vue'
import Users from '../views/UsersView.vue'
import User from '../views/UserView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/range-bar',
    name: 'RangeBar',
    component: RangeBar
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
