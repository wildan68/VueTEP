<template>
  <ContentCard
    title="Carousel"
    subtitle="Carousel using Swiper"
    transparent
  >
    <div class="grid grid-flow-row grid-cols-2 gap-6">
      <!-- Default -->
      <ContentCard
        title="Default"
      >
        <div class="overflow-hidden rounded-md bg-primary">
          <Swiper
            :modules="defaultSlideModules"
            pagination
            autoplay
          >
            <SwiperSlide
              v-for="slide in defaultSlide"
              :key="slide.label"
              class="p-6 text-white min-h-[150px] flex flex-col gap-6"
            >
              <span class="text-2xl font-bold">{{ slide.label }}</span>

              <span class="text-sm">{{ slide.content }}</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </ContentCard>

      <!-- Navigation -->
      <ContentCard
        title="Navigation"
      >
        <div class="relative flex items-center rounded-md">
          <Swiper
            :modules="defaultSlideModules"
            :navigation="{ nextEl: '.sw-next', prevEl: '.sw-prev' }"
          >
            <SwiperSlide
              v-for="slide in defaultSlide"
              :key="slide.label"
              class="p-6 min-h-[150px] flex flex-col gap-6"
            >
              <span class="text-2xl font-bold">{{ slide.label }}</span>

              <span class="text-sm">{{ slide.content }}</span>
            </SwiperSlide>
          </Swiper>

          <div class="absolute left-[-14px] z-10 sw-prev">
            <ElButton
              plain
              circle
            >
              <IconTablerChevronLeft />
            </ElButton>
          </div>

          <div class="absolute right-[-14px] z-10 sw-next">
            <ElButton
              plain
              circle
            >
              <IconTablerChevronRight />
            </ElButton>
          </div>
        </div>
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
const defaultSlideModules = [SwiperPagination, SwiperAutoplay, SwiperNavigation]
const defaultSlide = reactive([
  {
    label: 'Slide 1',
    content: 'Slide 1 Content',
  }, {
    label: 'Slide 2',
    content: 'Slide 2 Content',
  }, {
    label: 'Slide 3',
    content: 'Slide 3 Content',
  },
])
</script>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet-active) {
  background-color: #fff !important;
}
</style>