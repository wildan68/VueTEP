<template>
  <RouterView v-slot="{ Component }">
    <Component :is="Component" />
  </RouterView>
</template>

<script setup lang="ts">
// import { firebaseCloudMessaging } from '@fb'

// const { getToken } = firebaseCloudMessaging()



// onMounted(async() => console.log('fcm token : ', await getToken))
</script>