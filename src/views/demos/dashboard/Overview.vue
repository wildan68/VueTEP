<template>
  <ContentCard>
    <div class="flex flex-col gap-4">
      <div class="flex justify-between">
        <div class="flex flex-col gap-2">
          <span class="text-sm font-semibold text-zinc-400">Overview</span>
          <span class="text-xl font-bold text-zinc-700 dark:text-zinc-400">5.1K Users</span>
        </div>

        <span class="font-semibold text-success">+70.1%</span>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-col flex-1">
          <div class="flex items-center gap-2">
            <div class="p-2 rounded-full bg-primary/10 text-primary w-fit">
              <IconTablerUserPlus class="text-xs" />
            </div>

            <span class="text-xs">Subscriber</span>
          </div>

          <div class="flex justify-center py-6">
            <span class="text-3xl font-bold">
              +2.5K
            </span>
          </div>
        </div>

        <div class="bg-primary/10 w-[1px] h-full mx-2" />

        <div class="flex flex-col flex-1">
          <div class="flex items-center gap-2">
            <div class="p-2 rounded-full bg-danger/10 text-danger w-fit">
              <IconTablerUserMinus class="text-xs" />
            </div>

            <span class="text-xs">Unsubscriber</span>
          </div>

          <div class="flex justify-center py-6">
            <span class="text-3xl font-bold">
              -1.1K
            </span>
          </div>
        </div>
      </div>

      <ElProgress
        :percentage="70"
        :stroke-width="15"
        :show-text="false"
      />
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
// 
</script>