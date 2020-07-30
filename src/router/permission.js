import NProgress from 'nprogress' // progress bar
import router from './index'
import store from '../store'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

/**
 * Check user has permission for this routes.
 * 'admin' permission passed directly.
 * @param {Array} roles
 * @param {Array} permissionRoles
 */
function hasPermission (rolesUser, rolesRoute) {
  if (rolesUser.includes('admin')) return true
  if (!rolesRoute) return true // Se a rota não tem roles, pode acessar.
  return rolesUser.some((roleUser) => rolesRoute.includes(roleUser))
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  let logMsg = '[router.beforeEach]'
  try {
    // Route requires authentication?
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      // User is authentication?
      if (store.getters.token) {
        logMsg += '\t[token]'
        // User has access permission?
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          logMsg += `\t[Permission=${to.meta.roles}]\t[next]`
          next()
        } else {
          logMsg += `\t[!Permission=${to.meta.roles}]\t[next /401]`
          next({ path: 'error/401', replace: true })
        }
      } else {
        logMsg += '\t[!token]'
        next(`/login?redirect=${to.path}`)
      }
    } else {
      next()
    }
  } catch (err) {
    console.warn(`[router.beforeEach]\t${to.path}: ${err}`)
  }
  console.log(logMsg, to.path)
  NProgress.done()
})

router.afterEach(async () => {
  NProgress.done()
})
