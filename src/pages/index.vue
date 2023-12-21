<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-stretch gap-6">
      <ContentCard class="flex-1">
        <h2 class="text-2xl font-bold text-primary">
          Welcome to VueTEP ✨
        </h2>
        <span class="text-sm text-placeholder">
          Vue, Tailwind, Element Plus and Extend Component's combination for the best developing frontend experience
        </span>
      </ContentCard>

      <div class="relative flex items-center w-1/3 p-6 overflow-hidden text-white rounded-lg bg-gradient-to-r from-primary/80 to-primary">
        <img
          :src="PlanetDraw"
          class="absolute top-0 bottom-0 right-0 w-[50%] select-none"
        >
        <span class="text-3xl font-bold">Easy & Fast</span>
      </div>
    </div>

    <ContentCard>
      <template #title>
        <span class="text-xl font-extrabold cursor-pointer text-warning">#</span> Usage
      </template>
      <template #subtitle>
        Clone this repository and install dependencies
      </template>

      <div class="flex items-center gap-2">
        <div
          class="p-2.5 border rounded-md bg-zinc-100 dark:bg-zinc-900 h-fit dark:border-zinc-500 cursor-pointer"
          @click="copyRepository"
        >
          <IconTablerCopy />
        </div>

        <div
          v-highlightjs
          class="h-fit"
        >
          <code class="border rounded-md bg-zinc-100 dark:bg-zinc-900 javascript dark:border-zinc-500">{{ repositoryLink }}</code>
        </div>

        <div
          class="p-2.5 border rounded-md bg-zinc-100 dark:bg-zinc-900 h-fit dark:border-zinc-500 cursor-pointer"
          @click="openRepository"
        >
          <IconTablerBrandGithub />
        </div>
      </div>
    </ContentCard>
  </div>
</template>

<script setup lang="ts">
import PlanetDraw from '@images/planet-draw.png'

const repositoryLink = ref<string>('https://github.com/wildan68/VueTEP.git')

const copyRepository = () => {
  navigator.clipboard.writeText(repositoryLink.value)
  toast('Repository link copied!', {
    type: 'success',
  })
}

const openRepository = () => window.open('https://github.com/wildan68/VueTEP', '_blank')
</script>