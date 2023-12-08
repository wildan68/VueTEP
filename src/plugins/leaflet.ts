import { 
  LMap,
  LTileLayer ,
  LMarker,
  LPopup,
  LTooltip,
  LCircle,
  LCircleMarker,
  LControl,
  LControlAttribution,
  LControlLayers,
  LControlScale,
  LControlZoom,
  LFeatureGroup,
  LGeoJson,
  LGridLayer,
  LIcon,
  LImageOverlay,
  LLayerGroup,
  LPolygon,
  LPolyline,
  LRectangle,
  LWmsTileLayer,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import type { App } from 'vue'

const defineLeaflet = (): { install(app: App): void } => {
  return {
    install(app) {
      app.component('LMap', LMap)
      app.component('LTileLayer', LTileLayer)
      app.component('LMarker', LMarker)
      app.component('LPopup', LPopup)
      app.component('LTooltip', LTooltip)
      app.component('LCircle', LCircle)
      app.component('LCircleMarker', LCircleMarker)
      app.component('LControl', LControl)
      app.component('LControlAttribution', LControlAttribution)
      app.component('LControlLayers', LControlLayers)
      app.component('LControlScale', LControlScale)
      app.component('LControlZoom', LControlZoom)
      app.component('LFeatureGroup', LFeatureGroup)
      app.component('LGeoJson', LGeoJson)
      app.component('LGridLayer', LGridLayer)
      app.component('LIcon', LIcon)
      app.component('LImageOverlay', LImageOverlay)
      app.component('LLayerGroup', LLayerGroup)
      app.component('LPolygon', LPolygon)
      app.component('LPolyline', LPolyline)
      app.component('LRectangle', LRectangle)
      app.component('LWmsTileLayer', LWmsTileLayer)
    },
  }
}

export default defineLeaflet()