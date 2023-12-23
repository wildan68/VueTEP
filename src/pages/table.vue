<template>
  <ContentCard
    title="Data Table"
    subtitle="Table component using Element Plus"
  >
    <div class="flex flex-col gap-4">
      <!-- Data Table -->
      <ElTable
        v-loading="loading"
        :data="fakeResponse.data"
        stripe
      >
        <ElTableColumn
          prop="id"
          label="ID"
        />

        <ElTableColumn
          prop="username"
          label="Username"
          sortable
        />

        <ElTableColumn
          prop="name"
          label="Name"
          sortable
        />
        <ElTableColumn
          prop="email"
          label="Email"
        />

        <ElTableColumn
          prop="date"
          label="Date"
          sortable
        >
          <template #default="{ row }">
            <span>{{ dateFormat(row.date, 'DD MMM YYYY') }}</span>
          </template>
        </ElTableColumn>

        <ElTableColumn
          prop="actions"
          label="Actions"
          align="right"
        >
          <div class="flex items-center justify-end gap-2">
            <ElButton
              v-ripple
              type="success"
              circle
            >
              <IconTablerPencil />
            </ElButton>

            <ElButton
              v-ripple
              type="danger"
              circle
            >
              <IconTablerTrash />
            </ElButton>

            <ElButton
              v-ripple
              circle
            >
              <IconTablerDotsVertical />
            </ElButton>
          </div>
        </ElTableColumn>
      </ElTable>

      <!-- Pagination -->
      <div class="flex items-center justify-end gap-4">
        <ElPagination
          :page-size="10"
          layout="prev, pager, next"
          :total="fakeResponse.meta.total"
          @current-change="onPageChange"
        />
      </div>
    </div>
  </ContentCard>
</template>

<script setup lang="ts">
import { useDateFormat } from '@composables/dateFormat'

interface ITableData {
  id: string
  username: string
  name: string
  email: string
  date: string
}

const loading = ref<boolean>(true)
const { dateFormat } = useDateFormat()

const tableData = reactive<ITableData[]>([
  {
    id: '218218737',
    username: 'johndoe',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    date: '2021-01-01',
  }, {
    id: '218218738',
    username: 'janedoe',
    name: 'Jane Doe',
    email: 'janedoe@yahoo.com',
    date: '2021-01-02',
  }, {
    id: '218218739',
    username: 'evan',
    name: 'Evan',
    email: 'evan@js.com',
    date: '2021-01-03',
  }, {
    id: '218218740',
    username: 'jane',
    name: 'Jane',
    email: 'jane@ksol.com',
    date: '2021-01-04',
  }, {
    id: '218218741',
    username: 'peter',
    name: 'Peter',
    email: 'peter@mama.com',
    date: '2021-01-05',
  }, {
    id: '218218742',
    username: 'james',
    name: 'James',
    email: 'james@lsc.com',
    date: '2021-01-06',
  }, {
    id: '218218743',
    username: 'jimmy',
    name: 'Jimmy',
    email: 'jimmhy@gmail.com',
    date: '2021-01-07',
  }, {
    id: '218218744',
    username: 'gina',
    name: 'Gina',
    email: 'gina@lov.ee',
    date: '2021-01-08',
  }, {
    id: '218218745',
    username: 'udin',
    name: 'Udin',
    email: 'udin@jaja.ll',
    date: '2021-01-09',
  }, {
    id: '218218746',
    username: 'joko',
    name: 'Joko',
    email: 'joko@wi.dodo',
    date: '2021-01-10',
  },
])

const fakeResponse = reactive({
  msg: 'success',
  meta: {
    total: 100,
    current_page: 1,
    last_page: 10,
    from: 1,
    to: 10,
  },
  data: tableData,
})

const onPageChange = () => {
  // FAKE : randomize data table
  loading.value = true

  setTimeout(() => {
    fakeResponse.data = tableData.sort(() => Math.random() - 0.5)
    loading.value = false
  }, 1000)
}

onMounted(() => setTimeout(() => loading.value = false, 1000))
</script>