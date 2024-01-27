<template>
  <ContentCard transparent>
    <template #title>
      <span class="text-xl font-extrabold cursor-pointer text-warning">#</span> Installation
    </template>
    <template #subtitle>
      Install VueTEP to starter your project
    </template>
  </ContentCard>

  <ContentCard>
    <div class="flex flex-col gap-4">
      <div class="">
        <ElButton
          plain
          round
          @click="openRepository"
        >
          <template #icon>
            <IconTablerBrandGithub />
          </template>

          <span class="font-semibold">VueTEP Github</span>
        </ElButton>
      </div>
    
      <div class="flex gap-2">
        <span class="text-sm">1.</span> 
        <a
          href="https://github.com/wildan68/VueTEP/releases"
          target="_blank"
          class="text-sm text-primary"
          rel="noopener noreferrer"
        >
          Open Github Release
        </a>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">2.</span> 
        <span class="text-sm">Download the latest release</span>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">3.</span> 
        <span class="text-sm">Extract the zip file</span>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">4.</span> 
        <span class="text-sm">Open the extracted folder</span>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">5.</span> 
        <span class="text-sm">Open your terminal</span>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">6.</span> 
        <span class="text-sm">Run <TextHighlight>npm install</TextHighlight></span>
      </div>

      <div class="flex gap-2">
        <span class="text-sm">7.</span> 
        <span class="text-sm">Run <TextHighlight>npm run dev</TextHighlight> for development</span>
      </div>
    </div>
  </ContentCard>
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