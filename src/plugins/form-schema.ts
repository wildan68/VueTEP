import type { App } from 'vue'
import FormSchema from '@wildanrizky/vue-form-schema'
import { 
  ElInput, 
  ElButton, 
  ElCheckbox, 
  ElSelect,
  ElOption,
  ElRadioGroup,
  ElRadio,
} from 'element-plus'

const defineFormSchema = (): { install(app: App): void } => {
  return {
    install(app) {
      app.use(FormSchema, {
        components: {
          INPUT: ElInput,
          BUTTON: ElButton,
          CHECKBOX: ElCheckbox,
          SELECT: ElSelect,
          OPTION: ElOption,
          RADIO_GROUP: ElRadioGroup,
          RADIO: ElRadio,
        },
      })
    },
  }
}

export default defineFormSchema()
