<template>
  <ContentCard
    title="Maps"
    subtitle="Maps using Leaflet.js"
    transparent
  >
    <ContentCard title="Simple Maps">
      <LMap
        v-if="mapLoaded"
        v-model:zoom="zoom"
        :center="markerLatLng"
        :style="{ height: '400px' }"
        :use-global-leaflet="false"
        :options="{
          zoomControl: false,
          attributionControl: false,
        }"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        />

        <LMarker
          :lat-lng="markerLatLng"
        >
          <LPopup>
            <span class="font-semibold text-primary">{{ appName }} Maps</span>
            <p class="text-xs">
              This is a popup
            </p>
          </LPopup>
        </LMarker>

        <LControlZoom position="bottomright" />

        <LControl position="topleft">
          <ElInput
            v-model="mainSearch"
            placeholder="Search"
          >
            <template #prefix>
              <IconTablerSearch />
            </template>
          </ElInput>
        </LControl>
      </LMap>
    </ContentCard>
  </ContentCard>
</template>

<script setup lang="ts">
import { useApp } from '@core/app'

const { appName } = useApp()

const mapLoaded = ref<boolean>(false)
const zoom = ref<number>(17)
const markerLatLng = ref<number[]>([-6.175403, 106.824584])
const mainSearch = ref('')

onMounted(() => {
  setTimeout(() => {
    mapLoaded.value = true
  }, 500)
})
</script>