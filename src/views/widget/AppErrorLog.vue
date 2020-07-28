<template>
  <v-btn
    id="logs"
    color="error"
    disabled
    icon
  >
    <v-icon>mdi-bug</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppErrorLog',
  computed: {
    ...mapGetters([])
  },
  methods: {
  }
}
</script>
