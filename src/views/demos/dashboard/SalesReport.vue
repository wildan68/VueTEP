<template>
  <ContentCard
    title="Sales Report"
    subtitle="Last 30 days"
    menu
    :menu-items="menuItems"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-col flex-1 gap-2">
        <div class="flex items-center gap-2">
          <span class="text-5xl font-extrabold">
            $2,500
          </span>

          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-success/10 text-success">
            +28.7%
          </span>
        </div>

        <span class="text-sm text-placeholder">
          Compared to last month
        </span>

        <div class="flex items-center gap-6 p-4 mt-6 border rounded-md border-zinc-100 dark:border-zinc-800">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="p-2 text-4xl rounded-md text-primary bg-primary/10 w-fit">
                <IconTablerCurrencyDollar />
              </span>

              <span class="text-xs">Earnings</span>
            </div>

            <span class="text-xl font-semibold">$5,340</span>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="p-2 text-4xl rounded-md text-success bg-success/10 w-fit">
                <IconTablerArrowUpRight />
              </span>

              <span class="text-xs">Profit</span>
            </div>

            <span class="text-xl font-semibold">+200%</span>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <ApexChart
          ref="barChart"
          width="450"
          type="bar"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
import type { ApexOptions } from 'apexcharts'
import { useThemeStore } from '@/stores';

const themeStore = useThemeStore();
const isDark = computed(() => themeStore.isDark)

const [barChart] = [ref()]

const menuItems = reactive<{
  label: string;
  action: () => void;
    }[]>([
      {
        label: 'Download Report',
        action: () => {
          console.log('Download Report');
        },
      },
      {
        label: 'Share Report',
        action: () => {
          console.log('Share Report');
        },
      },
    ]);

const chartOptions = reactive<ApexOptions>({
  chart: {
    id: 'Sales Report',
    toolbar: {
      show: false,
    },
    selection: {
      enabled: true,
    },
  },
  theme: {
    mode: isDark.value ? 'dark' : 'light',
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    labels: {
      style: {
        colors: isDark.value ? '#fff' : '#4a4a49',
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [themeStore.themeColor],
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
    },
  },
})

const series = reactive([
  {
    name: 'Monthly Sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
])

watch(
  () => themeStore.themeColor,
  (val) => {
    barChart.value?.updateOptions({ colors: [val] })
  },
)

watch(
  () => themeStore.isDark,
  (val) => {
    chartOptions.theme = { mode: val ? 'dark' : 'light' }
    chartOptions.xaxis = { labels: { style: { colors: val ? '#fff' : '#4a4a49' } } }
    // chartOptions.yaxis = { labels: { style: { colors: val ? '#fff' : '#4a4a49' } } }

    barChart.value?.updateOptions(chartOptions)
  },
)
</script>