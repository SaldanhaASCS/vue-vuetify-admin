<template>
  <v-container class="container--fluid grid-list-xs">
    <v-row>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          Markdown {{ $t('components.baseOn') }}
          <a
            href="https://github.com/nhn/toast-ui.vue-editor"
            target="_blank"
          >
            toast-ui.vue-editor
          </a>.
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <mark-down-editor
          v-model="content"
          height="755px"
          :language="language"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarkDownEditor from '@/demo/components/MarkdownEditor/index.vue'

export default {
  name: 'MarkDownDemo',
  components: { MarkDownEditor }
}
</script>
