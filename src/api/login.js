/**
 * Vuetify theme options.
 */
import { userAdmin, userEditor, userVisitor } from '@/api/mock'

/**
 * Checa se email e senha é o mesmo que está no banco de dados "@/api/mock.js"
 *
 * @param {String} email user email
 * @param {String} password user password
 */
export const loginByEmail = async (email, password) => {
  console.log(`[loginByEmail] email ${email}`)
  let user = {}
  try {
    if (userEditor.email === email && userEditor.password === password) {
      user = userEditor
    } else if (userAdmin.email === email && userAdmin.password === password) {
      user = userAdmin
    } else if (userVisitor.email === email && userVisitor.password === password) {
      user = userVisitor
    }
    if (!user || !user.token) {
      throw new Error('User is not found')
    }
  } catch (err) {
    console.warn(`[loginByEmail] ${err}`)
  }
  return { user }
}

/**
 * Get user information by token
 *
 * @param {String} token user token
 */
export const getUserInfo = async (token) => {
  console.log(`[getUserInfo] token ${token}`)
  let user = {}
  try {
    if (!token) {
      throw new Error('Invalid token')
    }

    if (token === userAdmin.token) {
      user = userAdmin
    } else {
      user = userEditor
    }
  } catch (err) {
    console.warn(`[getUserInfo] ${err}`)
  }
  return { user }
}
