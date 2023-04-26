// 处理路由守卫
import router from '@/router'
import store from './store'

/**
 * 白名单
 * 用户不登陆也可以进入的页面
 */
const whiteList = ['/login']

/**
 * 路由前置守卫
 *next 是否要去
 */
router.beforeEach(async (to, from, next) => {
  // 1.用户已登录,不允许进入login
  // if (store.state.user.token)太复杂,使用getters.js
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在,如果不存在,则获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 2.用户未登录,只允许进入login
    // 还得处理404和401页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
