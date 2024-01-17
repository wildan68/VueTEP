<template>
  <div class="flex flex-col gap-6">
    <ContentCard>
      <template #title>
        <span class="text-xl font-extrabold cursor-pointer text-warning">#</span> Installation
      </template>
      <template #subtitle>
        <ul class="mt-4 ml-6 list-disc">
          <li class="mb-4">
            <div class="flex flex-col gap-4">
              Clone this repository or download the zip file

              <div class="flex items-center gap-2">
                <div
                  class="p-2.5 border rounded-md bg-zinc-100 dark:bg-zinc-900 h-fit dark:border-zinc-500 cursor-pointer hover:text-zinc-600" 
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
                  class="p-2.5 border rounded-md bg-zinc-100 dark:bg-zinc-900 h-fit dark:border-zinc-500 cursor-pointer hover:text-zinc-600"
                  @click="openRepository"
                >
                  <IconTablerBrandGithub />
                </div>
              </div>
            </div>
          </li>
          <li class="mb-4">
            Remove Git
          </li>
          <li class="mb-4">
            Install the package using <TextHighlight>npm</TextHighlight> or <TextHighlight>yarn</TextHighlight>
          </li>
          <li class="mb-4">
            Import the package in your <TextHighlight>main.ts</TextHighlight> file
          </li>
          <li class="mb-4">
            Use the component in your template
          </li>
        </ul>
      </template>
    </ContentCard>
  </div>
</template>
  
<script setup lang="ts">  
const repositoryLink = ref<string>('https://github.com/wildan68/VueTEP.git')
  
const copyRepository = () => {
  navigator.clipboard.writeText(repositoryLink.value)
  toast('Repository link copied!', {
    type: 'success',
  })
}
  
const openRepository = () => window.open('https://github.com/wildan68/VueTEP', '_blank')
</script>