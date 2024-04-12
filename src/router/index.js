import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexDemo from '@/IndexDemo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexDemo
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },{
    //   path: '/ref',
    //   component: () => import('../views/RefView.vue')
    // },{
    //   path: '/reactive',
    //   component: () => import('../views/Reactive.vue')
    // },{
    //   path: '/computed',
    //   component: () => import('../views/ComputedView.vue')
    // },
    // {
    //   path: '/watch',
    //   component: () => import('../views/WatchView.vue')
    // },{
    //   path: '/img',
    //   component: () => import('../views/imgView.vue')
    // },{
    //   path: '/cart',
    //   component: () => import('../views/CartView.vue')
    // },{
    //   path: '/life',
    //   component: () => import('../views/LifeView.vue')
    // },{
    //   path: '/father',
    //   component: () => import('../views/Father.vue')
    // },{
    //   path: '/fv',
    //   component: () => import('../views/FatherView.vue')
    // },{
    //   path: '/goodlist',
    //   component: () => import('../views/GoodList.vue')
    // },{
    //   path: '/slot',
    //   component: () => import('../views/SlotView.vue')
    // },{
    //   path: '/courseList',
    //   component: () => import('../views/course/List.vue')
    // },{
    //   path: '/courseDetail/:id', /* 动态路由 */
    //   name: 'detail', /* 命名路由 */
    //   component: () => import('../views/course/Detail.vue')
    // },{
    //   path: '/courseDetail1/', /* 动态路由 */
    //   component: () => import('../views/course/Detail1.vue')
    // },{
    //   path: '/home', 
    //   component: () => import('../views/home/Home.vue'),
    //   redirect: '/home/vue', // 默认页面中显示哪个
    //   children: [
    //     { path: 'vue', component: () => import('../views/home/HomeVue.vue') },
    //     { path: 'js', component: () => import('../views/home/HomeJs.vue') }
    //   ]
    // },{
    //   path: '/login',
    //   component: () => import('../views/Login.vue')
    // },{
    //   path: '/newslist',
    //   component: () => import('../views/news/List.vue')
    // },{
    //   path: '/goodsDetail/:id', /* 动态路由 */
    //   component: () => import('../views/news/Detail.vue')
    // },{
    //   path: '/user',
    //   component: () => import('../views/user/List.vue')
    // },{
    //   path: '/userDetail/:id', /* 动态路由 */
    //   component: () => import('../views/user/Detail.vue')
    // },
  ]
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  let isLogin = false;
  console.log(to)
  if (to.path.indexOf('courseDetail') !== -1) {
    if (isLogin) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})
export default router
