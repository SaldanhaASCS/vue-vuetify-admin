<template>
  <v-breadcrumbs
    id="breadcrumbs-container"
    class="hidden-sm-and-down"
    :items="levelList"
    divider="/"
  >
    <template v-slot:item="props">
      <a @click.prevent="handleLink(props.item)">
        {{ generateTitle(props.item.meta.title) }}
      </a>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'AppBreadcrumbs',
  data: () => ({
    levelList: null
  }),
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle (title) {
      const hasKey = this.$te(`${title}`)
      if (hasKey) {
        const translatedTitle = this.$t(`${title}`)
        return translatedTitle
      }
      return title
    },
    getBreadcrumb () {
      let matched = this.$route.matched.filter((item) => item.name)

      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: 'route.dashboard' } }].concat(matched)
      }

      this.levelList = matched.filter((item) => item.meta &&
        item.meta.title && item.meta.breadcrumb !== false)
    },
    handleLink (item) {
      console.groupCollapsed('handleLink')
      const { redirect, path } = item
      console.log(`redirect=${redirect}, path=${path}`)
      if (redirect) {
        console.log('redirect')
        this.$router.push(redirect)
        console.groupEnd()
        return
      }
      if (this.$router.currentRoute.path !== path) {
        this.$router.push(path)
      }
      console.groupEnd()
    }
  }
}
</script>
