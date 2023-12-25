import { defineStore } from 'pinia'
import { Actions, Getters } from '@/enum/stores'
import { useApiServices } from '@composables/apiServices';

const { query } = useApiServices();

export const useStepperStore = defineStore('stepper', {
  state: () => ({
    activeStep: 1,
    forms: {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phoneNo: '',
      latLang: [-6.175403, 106.824584],
      paymentMethod: 0,
      cardName: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardCvv: '',
      paypalEmail: '',
    },
  }),
  actions: {
    [Actions.SET_ACTIVE_STEP] (step: number) {
      this.activeStep = step;
    },
    [Actions.GET_COUNTRY_LIST] (payload: any) {
      return query('https://restcountries.com/v3.1/all', payload)
    },
  },
  getters: {
    [Getters.GET_ACTIVE_STEP] (state): number {
      return state.activeStep;
    },
    [Getters.GET_FORMS] (state) {
      return state.forms;
    },
  },
})