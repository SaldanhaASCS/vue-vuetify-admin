<template>
  <editor
    v-model="editorText"
    :height="height"
  />
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import Editor from '@toast-ui/vue-editor/src/Editor.vue'

export default {
  name: 'MarkDownEditor',
  components: { Editor },
  props: {
    height: {
      type: String,
      required: false,
      default: '300px'
    }
  },
  data () {
    return {
      editorText: ''
    }
  }
}
</script>
