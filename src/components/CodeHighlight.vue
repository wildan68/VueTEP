<template>
  <pre v-highlightjs><code class="border rounded-md bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-500 javascript"><template v-if="$slots.default">{{ slotsFormatted }}</template><template v-else-if="code">{{ formatCode(code) }}</template></code></pre>
</template>

<script setup lang="ts">
interface IProps {
  code?: string
}

defineProps<IProps>()

const slots = defineSlots()
const slotsFormatted = slots.default ? formatCode(slots.default()[0].children) : ''

function formatCode (code: string) {
  return code
    .replace('&lt;', '<')
    .replace('&gt;', '>')
    .replace('&quot;', '"')
    .replace('&amp;', '&')
}
</script>