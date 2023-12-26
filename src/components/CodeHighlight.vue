<template>
  <div
    :style="{ height: expanded ? 'auto' : '400px' }"
  >
    <TransitionSlide>
      <pre v-highlightjs><code class="border rounded-md bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-500 javascript"><template v-if="$slots.default">{{ slotsFormatted }}</template><template v-else-if="code">{{ formatCode(code) }}</template></code></pre>
    </TransitionSlide>
    
    <div
      v-if="codeLength > 300"
      class="absolute bottom-0 flex justify-center py-5 font-semibold text-white cursor-pointer right-6 left-6 shadow-more"
      @click="expanded = !expanded"
    >
      {{ expanded ? 'Show Less' : 'Show More' }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  code?: string
}

const props = defineProps<IProps>()

const slots = defineSlots()
const slotsFormatted = slots.default ? formatCode(slots.default()[0].children) : ''
const codeLength: number = props.code?.length || slotsFormatted.length || 0
const expanded = ref<boolean>(false)

function formatCode (code: string) {
  return code
    .replace('&lt;', '<')
    .replace('&gt;', '>')
    .replace('&quot;', '"')
    .replace('&amp;', '&')
}
</script>

<style scoped lang="scss">
.shadow-more {
  background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(35, 35, 35, 0.5) 100%);
}
</style>