import type { App } from 'vue'
import FormSchema from '@wildanrizky/vue-form-schema'
import { ElInput, ElButton, ElCheckbox } from 'element-plus'

const defineFormSchema = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(FormSchema, {
        components: {
          INPUT: ElInput,
          BUTTON: ElButton,
          CHECKBOX: ElCheckbox,
        },
      })
    },
  }
}

export default defineFormSchema()
