<template>
  <div class="relative flex items-center text-white rounded-lg bg-gradient-to-r from-primary/80 to-primary">
    <Swiper
      :modules="defaultSlideModules"
      autoplay
      pagination
      class="p-6"
    >
      <SwiperSlide
        v-for="slide in defaultSlide"
        :key="slide.label"
        class="p-6 min-h-[150px] flex flex-col gap-6 relative"
      >
        <img
          :src="slide.images"
          width="100px"
          class="absolute select-none top-2 right-8"
        >
        
        <span class="text-2xl font-bold">Website Analytics</span>

        <span class="text-sm">{{ slide.label }}</span>

        <div class="grid grid-flow-row grid-cols-2 gap-y-2">
          <div
            v-for="items in slide.items"
            :key="items.label"
            class="flex items-center gap-2"
          >
            <ElTooltip
              :content="toDotNumber(items.value)"
              placement="top"
            >
              <span class="px-4 py-2 text-sm font-semibold rounded-md bg-zinc-700/40">{{ toShortNumber(items.value) }}</span>
            </ElTooltip>

            <span class="text-sm">{{ items.label }}</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import BarChartIllustration from '@images/bar-graph.png'
import MoleculeIllustration from '@images/molecule.png'
import PieChartIllustration from '@images/pie-chart.png'
import { useNumberFormat } from '@composables/numberFormat'

const defaultSlideModules = [SwiperPagination, SwiperAutoplay, SwiperNavigation]
const { toShortNumber, toDotNumber } = useNumberFormat()

const defaultSlide = reactive([
  {
    label: 'Traffic',
    content: 'Slide 1 Content',
    images: MoleculeIllustration,
    items: [
      {
        label: 'Users',
        value: 150304,
      }, {
        label: 'Sessions',
        value: 12330,
      }, {
        label: 'Page Views',
        value: 2000000,
      }, {
        label: 'Bounce Rate',
        value: 924,
      },
    ],
  }, {
    label: 'Bandwidth',
    content: 'Slide 2 Content',
    images: BarChartIllustration,
    items: [
      {
        label: 'Memory',
        value: 2400,
      }, {
        label: 'CPU',
        value: 1000,
      }, {
        label: 'Storage',
        value: 2000,
      }, {
        label: 'Network',
        value: 50,
      },
    ],
  }, {
    label: 'Users',
    content: 'Slide 3 Content',
    images: PieChartIllustration,
    items: [
      {
        label: 'New',
        value: 156,
      }, {
        label: 'Returning',
        value: 654,
      }, {
        label: 'Subscribers',
        value: 923432,
      }, {
        label: 'Unsubscribers',
        value: 645,
      },
    ],
  },
])
</script>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet-active) {
  background-color: #fff !important;
}
</style>