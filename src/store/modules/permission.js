import { constantRoutes } from '@/router'

/**
 * Através do meta.role determina se os direitos atuais do usuário correspondem
 * @param roles
 * @param route
 */
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  }
  return true
}

/**
 * Filtre recursivamente todas as rotas que tenham as roles do usuário
 * @param roles
 * @param routes constantRoutes
 */
export const filterRolesRoutes = (roles, routes) => {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterRolesRoutes(roles, tmp.children)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routes: [] // Lista de rotas que o usuário poderá acessar
  },

  getters: {
    permissionRoutes: (state) => state.routes // Rotas do menu lateral
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      state.routes = routes
    }
  },
  actions: {
    GenerateRoutes: async ({ commit }, { roles }) => {
      try {
        // console.groupCollapsed(`[vuex.permission] GenerateRoutes [${roles}]`);
        let authorizedRoutes
        if (roles.includes('admin')) { // Se Desenvolvedor, terá acesso a todas
          authorizedRoutes = constantRoutes
        } else {
          authorizedRoutes = filterRolesRoutes(roles, constantRoutes) // Se não, filtre
        }
        commit('SET_ROUTES', authorizedRoutes)
        // console.log('[vuex.permission] authorizedRoutes ', authorizedRoutes);
        // console.groupEnd();
      } catch (err) {
        console.warn('[vuex.permission] GenerateRoutes', err)
      }
    }
  }
}

export default permission
