import { defineStore } from 'pinia'
import { Actions, Getters } from '@/enum/stores'

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
    },
  }),
  actions: {
    [Actions.SET_ACTIVE_STEP] (step: number) {
      this.activeStep = step;
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