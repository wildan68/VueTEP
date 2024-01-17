<template>
  <ContentCard
    title="Inline Edit"
    subtitle="Inline Edit custom component"
    transparent
  >
    <div class="grid grid-flow-row grid-cols-2 gap-6">
      <!-- Default -->
      <ContentCard
        title="Default Textfield"
      >
        <InlineField v-model="defaultModel" />
      </ContentCard>

      <!-- With Save Action -->
      <ContentCard
        title="With Save Action"
      >
        <InlineField
          v-model="saveModel"
          with-save
        />
      </ContentCard>

      <!-- Select Field -->
      <ContentCard
        title="Select Field"
      >
        <InlineField
          v-model="selectModel"
          type="select"
          :select-options="citySelect"
        />
      </ContentCard>

      <!-- Textarea -->
      <ContentCard
        title="Textarea Field"
      >
        <InlineField
          v-model="textAreaModel"
          with-save
          type="textarea"
        />
      </ContentCard>
    </div>

    <!-- Custom With Froala -->
    <ContentCard
      title="Custom Field with Text Editor Froala"
      class="mt-6"
    >
      <InlineField
        v-model="customModel"
        type="custom"
      >
        <template #field="{ model, onUpdate }">
          <TextEditor
            :value="model"
            @update:value="onUpdate"
          />
        </template>
      </InlineField>  
    </ContentCard>
  </ContentCard>
</template>

<script setup lang="ts">
import InlineField from '@/components/InlineField.vue'
import TextEditor from '@/components/TextEditor.vue'

const defaultModel = ref<string>('Click for edit me!')
const saveModel = ref<string>('Click for edit me!')
const selectModel = ref<string>('Kota Jakarta')
const textAreaModel = ref<string>('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.')
const customModel = ref<string>('<span style="color: red; font-weight: 600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span>\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\n\nClick here to edit my friend!.\n\n<img src="https://i.pinimg.com/736x/74/f4/f5/74f4f548392fbdafbe8a5d9764c83eaf.jpg" width="250px"/>')

const citySelect = reactive([
  {
    label: 'Kota Jakarta',
    value: 'Kota Jakarta',
  },
  {
    label: 'Kota Bandung',
    value: 'Kota Bandung',
  },
  {
    label: 'Kota Surabaya',
    value: 'Kota Surabaya',
  },
])
</script>