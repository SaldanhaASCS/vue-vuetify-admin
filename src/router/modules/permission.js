/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/TheLayout.vue'

const permissionRouter = {
  path: '/permission',
  component: Layout,
  redirect: '#',
  name: 'Permission',
  meta: {
    title: 'route.permissions',
    icon: 'mdi-account-group',
    roles: ['admin', 'editor', 'visitor'],
    requiresAuth: true
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/components/Permission/Admin.vue'),
      name: 'PermissionAdmin',
      meta: { title: 'route.permission.admin', roles: ['admin'], noCache: true, requiresAuth: true }
    },
    {
      path: 'editor',
      component: () => import('@/views/components/Permission/Editor.vue'),
      name: 'PermissionEditor',
      meta: { title: 'route.permission.editor', roles: ['editor'], noCache: true, requiresAuth: true }
    },
    {
      path: 'visitor',
      component: () => import('@/views/components/Permission/Visitor.vue'),
      name: 'PermissionVisitor',
      meta: { title: 'route.permission.visitor', roles: ['visitor'], noCache: true, requiresAuth: true }
    }
  ]
}

export default permissionRouter
