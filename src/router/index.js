import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('@/components/Home') // returns a Promise
const Search = () => import('@/components/Search') // returns a Promise
const View = () => import('@/components/View') // returns a Promise
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/view/:cardId',
      name: 'View',
      component: View,
      props: true
    }
  ]
})
