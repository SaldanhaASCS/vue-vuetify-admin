/**
 * vva v0.0.5
 * (c) 2019 NelsonEAX
 * @license MIT
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { settings } from '@/config'
import vuetify from '@/locale/vuetify'
import en from './en_US'
import zh from './zh_CN'
import ru from './ru_RU'
import pt from './pt_BR'
import es from './es_ES'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    $vuetify: vuetify.en
  },
  es: {
    ...es,
    $vuetify: vuetify.es
  },
  zh: {
    ...zh,
    $vuetify: vuetify.zh
  },
  ru: {
    ...ru,
    $vuetify: vuetify.ru
  },
  pt: {
    ...pt,
    $vuetify: vuetify.pt
  }
}

/**
 * Available locales
 */
export const locales = [
  {
    title: 'English',
    locale: 'en',
    abbr: 'ENG'
  },
  {
    title: 'Español',
    locale: 'es',
    abbr: 'ESP'
  },
  {
    title: 'Português',
    locale: 'pt',
    abbr: 'BRA'
  },
  {
    title: 'Русский',
    locale: 'ru',
    abbr: 'RUS'
  },
  {
    title: '中文',
    locale: 'zh',
    abbr: 'CHN'
  }
]

/**
 * VueI18n instance
 */
const i18n = new VueI18n({
  // set locale options: en_US | zh_CN | ru_RU | pt_BR | es_ES
  locale: settings.locale,
  // set locale messages
  messages
})

/**
 * Set locale to new value at Vue and Vuex.
 *
 * @param {Boolean} newLocale themeDark new value
 */
export async function setLocale (locale) {
  if (i18n.locale !== locale) {
    console.log(`[Locale] Set to "${locale}"`)
    i18n.locale = locale || settings.locale
  } else {
    console.warn(`[Locale] "${locale}" is current`)
  }
}

export default i18n
