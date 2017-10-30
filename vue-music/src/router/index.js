import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Rank from 'components/rand/rand'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Rank
    },
    {
      path: '/recommend',
      name: '推荐',
      component: Recommend
    },
    {
      path:'/singer',
      name:'歌手',
      component:Singer
    },
    {
      path:'/search',
      name:'搜索',
      component:Search
    },
    {
      path:'/rank',
      name:'排行',
      component:Rank
    }
  ]
})
