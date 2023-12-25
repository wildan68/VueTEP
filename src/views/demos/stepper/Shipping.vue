<template>
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
    <div class="flex flex-col items-center gap-6 p-4 border rounded-lg">
      <span class="font-semibold">Shipping Information</span>
      <table>
        <tr>
          <td>First Name</td>
          <td class="px-4">
            :
          </td>
          <td>{{ forms.firstName }}</td>
        </tr>
        <tr>
          <td>Last Name</td><td class="px-4">
            :
          </td>
          <td>{{ forms.lastName }}</td>
        </tr>
        <tr>
          <td>Email</td><td class="px-4">
            :
          </td>
          <td>{{ forms.email }}</td>
        </tr>
        <tr>
          <td>Birthdate</td><td class="px-4">
            :
          </td>
          <td>{{ dateFormat(forms.birthDate) }}</td>
        </tr>
        <tr>
          <td>Address</td><td class="px-4">
            :
          </td>
          <td>{{ forms.address }}</td>
        </tr>
        <tr>
          <td>Country</td><td class="px-4">
            :
          </td>
          <td>{{ country?.name || '' }}</td>
        </tr>
        <tr>
          <td>State</td><td class="px-4">
            :
          </td>
          <td>{{ state?.name || '' }}</td>
        </tr>
        <tr>
          <td>City</td><td class="px-4">
            :
          </td>
          <td>{{ forms.city }}</td>
        </tr>
        <tr>
          <td>ZIP</td><td class="px-4">
            :
          </td>
          <td>{{ forms.zip }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useStepperStore } from '@stores';
import { Getters } from '@/enum/stores';
import { useDateFormat } from '@composables/dateFormat'
import { Country, State }  from 'country-state-city';

const store = useStepperStore()
const forms = store[Getters.GET_FORMS]
const { dateFormat } = useDateFormat()

const country = Country.getCountryByCode(forms.country)
const state = State.getStateByCodeAndCountry(forms.state, forms.country)
</script>