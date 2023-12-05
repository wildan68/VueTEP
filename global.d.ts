import type { DefineComponent } from 'vue';
import type { ComponentPropsAndEmits } from '@morev/vue-transitions';
import ApexCharts from 'apexcharts';

export {}

declare module 'vue' {
  export interface GlobalComponents {
    TransitionFade: DefineComponent<ComponentPropsAndEmits['TransitionFade']>;
    TransitionExpand: DefineComponent<ComponentPropsAndEmits['TransitionExpand']>;
    TransitionScale: DefineComponent<ComponentPropsAndEmits['TransitionScale']>;
    TransitionSlide: DefineComponent<ComponentPropsAndEmits['TransitionSlide']>;
  }

  interface Vue {
    $apexcharts: typeof ApexCharts;
  }
}