<template>
  <div class="flex items-center gap-7">
    <label>Toast</label>
    <div class="flex flex-wrap items-center gap-3">
      <ElButton
        type="primary"
        @click="onToast('top-right')"
      >
        Toast Top Right!
      </ElButton>

      <ElButton
        type="primary"
        @click="onToast('top-center')"
      >
        Toast Top Center!
      </ElButton>

      <ElButton
        type="primary"
        @click="onToast('top-left')"
      >
        Toast Top Left!
      </ElButton>

      <ElButton
        type="primary"
        @click="onToast('bottom-right')"
      >
        Toast Bottom Right!
      </ElButton>

      <ElButton
        type="primary"
        @click="onToast('bottom-center')"
      >
        Toast Bottom Center!
      </ElButton>

      <ElButton
        type="primary"
        @click="onToast('bottom-left')"
      >
        Toast Bottom Left!
      </ElButton>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import type { ToastPosition } from 'vue3-toastify/index';

const onToast = (position: ToastPosition) => {
  toast("Hello world", {
    position,
  })
}
</script>