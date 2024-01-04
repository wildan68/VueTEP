<template>
  <template v-if="offlineReady || needRefresh">
    <div class="mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>New content available, click on reload button to update.</span>
    </div>

    <div class="flex items-center justify-center gap-2">
      <ElButton
        type="primary"
        @click="() => updateServiceWorker()"
      >
        Reload
      </ElButton>

      <ElButton
        type="primary"
        @click="onClose"
      >
        Close
      </ElButton>
    </div>
  </template>

  <template v-else>
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </template>
</template>

<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";
import { firebaseCloudMessaging } from '@fb'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
const { getToken } = firebaseCloudMessaging()

const onClose = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};


onMounted(async() => console.log('token', await getToken))
</script>