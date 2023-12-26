<template>
  <ContentCard
    title="Charts"
    subtitle="Charts using ApexCharts"
    transparent
  >
    <div class="flex flex-wrap justify-center flex-grow gap-2">
      <ContentCard
        title="Bar Chart"
      >
        <ApexChart
          ref="barChart"
          width="450"
          type="bar"
          :options="chartOptions"
          :series="series"
        />
      </ContentCard>

      <ContentCard
        title="Line Chart"
      >
        <ApexChart
          ref="lineChart"
          width="450"
          type="line"
          :options="chartOptions"
          :series="series"
        />
      </ContentCard>

      <ContentCard
        title="Area Chart"
      >
        <ApexChart
          ref="areaChart"
          width="450"
          type="area"
          :options="chartOptions"
          :series="series"
        />
      </ContentCard>

      <ContentCard
        title="Donut Chart"
      >
        <ApexChart
          ref="donutChart"
          width="450"
          type="donut"
          :options="donutOptions"
          :series="donutSeries"
        />
      </ContentCard>

      <ContentCard
        title="Pie Chart"
      >
        <ApexChart
          ref="pieChart"
          width="450"
          type="pie"
          :options="donutOptions"
          :series="donutSeries"
        />
      </ContentCard>

      <ContentCard
        title="Radar Chart"
      >
        <ApexChart
          ref="radarChart"
          width="450"
          type="radar"
          :options="radarOptions"
          :series="radarSeries"
        />
      </ContentCard>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { useThemeStore } from '@/stores';

const themeStore = useThemeStore();

const [
  barChart, 
  lineChart, 
  areaChart,
  donutChart,
  pieChart,
  radarChart,
] = [ref(), ref(), ref(), ref(), ref(), ref()]

const chartOptions = reactive<ApexOptions>({
  chart: {
    id: 'vuechart-example',
  },
  theme: {
    mode: themeStore.isDark ? 'dark' : 'light',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    labels: {
      style: {
        colors: themeStore.isDark ? '#fff' : '#4a4a49',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: themeStore.isDark ? '#fff' : '#4a4a49',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [themeStore.themeColor],
  legend: {
    show: false,
  },
})

const series = reactive([
  {
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
])

const radarOptions = reactive<ApexOptions>({
  chart: {
    id: 'vuechart-example',
  },
  theme: {
    mode: themeStore.isDark ? 'dark' : 'light',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    labels: {
      style: {
        colors: themeStore.isDark ? '#fff' : '#4a4a49',
      },
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#8442ff', '#f0932b', '#eb2f06'],
  legend: {
    show: false,
  },
})

const radarSeries = reactive([
  {
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  }, {
    name: 'series-2',
    data: [23, 12, 54, 61, 32, 56, 81, 19],
  }, {
    name: 'series-3',
    data: [62, 12, 45, 55, 76, 41, 23, 43],
  },
])

const donutOptions = reactive<ApexOptions>({
  chart: {
    id: 'vuechart-example',
  },
  dataLabels: {
    enabled: false,
  },
  theme: {
    mode: themeStore.isDark ? 'dark' : 'light',
  },
  tooltip: {
    theme: themeStore.isDark ? 'light' : 'dark',
  },
  colors: ['#8442ff', '#f0932b', '#4b7bec', '#78e08f', '#eb2f06'],
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
})
const donutSeries = reactive([44, 55, 13, 43, 22])

watch(
  () => themeStore.themeColor,
  (val) => {
    barChart.value?.updateOptions({ colors: [val] })
    lineChart.value?.updateOptions({ colors: [val] })
    areaChart.value?.updateOptions({ colors: [val] })
  },
)

watch(
  () => themeStore.isDark,
  (val) => {
    chartOptions.theme = { mode: val ? 'dark' : 'light' }
    chartOptions.xaxis = { labels: { style: { colors: val ? '#fff' : '#4a4a49' } } }
    chartOptions.yaxis = { labels: { style: { colors: val ? '#fff' : '#4a4a49' } } }

    barChart.value?.updateOptions(chartOptions)
    lineChart.value?.updateOptions(chartOptions)
    areaChart.value?.updateOptions(chartOptions)
    donutChart.value?.updateOptions({ theme: {  mode: val ? 'dark' : 'light' }})
    donutChart.value?.updateOptions({ tooltip: { theme: val ? 'light' : 'dark' }})
    pieChart.value?.updateOptions({ theme: {  mode: val ? 'dark' : 'light' }})
    pieChart.value?.updateOptions({ tooltip: { theme: val ? 'light' : 'dark' }})
    radarChart.value?.updateOptions({ theme: {  mode: val ? 'dark' : 'light' }})
  },
)
</script>