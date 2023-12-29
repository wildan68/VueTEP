import { defineStore } from 'pinia'
import { Actions, Getters } from '@/enum/stores'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    width: 282,
    collapsed: false,
    hovered: false,
  }),
  actions: {
    [Actions.TOGGLE_SIDEBAR]() {
      if (this.collapsed) {
        this.width = 282;
        this.collapsed = false;
      }
      else {
        this.width = 100;
        this.collapsed = true;
      }
    },
    [Actions.TOGGLE_SIDEBAR_HOVERED]() {
      this.hovered = !this.hovered;
    },
  },
  getters: {
    [Getters.GET_SIDEBAR_WIDTH] (state): number {
      return state.width;
    },
    [Getters.GET_COLLAPSED] (state): boolean {
      return state.collapsed;
    },
    [Getters.GET_SIDEBAR_HOVERED] (state): boolean {
      return state.hovered;
    },
  },
})