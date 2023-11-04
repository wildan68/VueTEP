import { defineStore } from 'pinia'
import { Actions } from '@/enum/stores'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeColor: getComputedStyle(document.body).getPropertyValue('--el-color-primary'),
  }),
  actions: {
    [Actions.SET_COLOR_LIGHTER] (hexColor: string, level: number) {
      const color = hexColor.replace('#', '');
      const num = parseInt(color, 16);
      const amt = Math.round(2.55 * level);
      const R = (num >> 16) + amt;
      const G = (num >> 8 & 0x00FF) + amt;
      const B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    },

    [Actions.SET_COLOR_DARKER] (hexColor: string, level: number) {
      const color = hexColor.replace('#', '');
      const num = parseInt(color, 16);
      const amt = Math.round(2.55 * level);
      const R = (num >> 16) - amt;
      const G = (num >> 8 & 0x00FF) - amt;
      const B = (num & 0x0000FF) - amt;
      return '#' + (0x1000000 + (R > 255 ? 255 : R < 1 ? 0 : R) * 0x10000 + (G > 255 ? 255 : G < 1 ? 0 : G) * 0x100 + (B > 255 ? 255 : B < 1 ? 0 : B)).toString(16).slice(1);
    },

    [Actions.SET_THEME_COLOR] (hexColor: string) {
      try {
        const root = document.documentElement;
        root.style.setProperty('--el-color-primary', hexColor);
        root.style.setProperty('--el-color-primary-light-3', this[Actions.SET_COLOR_LIGHTER](hexColor, 9));
        root.style.setProperty('--el-color-primary-light-5', this[Actions.SET_COLOR_LIGHTER](hexColor, 8));
        root.style.setProperty('--el-color-primary-light-7', this[Actions.SET_COLOR_LIGHTER](hexColor, 7));
        root.style.setProperty('--el-color-primary-light-8', this[Actions.SET_COLOR_LIGHTER](hexColor, 5));
        root.style.setProperty('--el-color-primary-light-9', this[Actions.SET_COLOR_LIGHTER](hexColor, 70));
        root.style.setProperty('--el-color-primary-dark-2', this[Actions.SET_COLOR_DARKER](hexColor, 2));
        this.themeColor = hexColor;

        
      }
      catch(e) {
        throw new Error(e as string);
      }
    },
  },
})
