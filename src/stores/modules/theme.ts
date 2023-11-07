import { defineStore } from 'pinia'
import { Actions } from '@/enum/stores'
import { CSSVariables } from '@/enum/css-variables'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    variables: CSSVariables,
    themeColor: getComputedStyle(document.body).getPropertyValue('--el-color-primary'),
    isDark: document.documentElement.classList.contains('dark'),
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
      // soft darker
      const color = hexColor.replace('#', '');
      const num = parseInt(color, 16);
      const amt = Math.round(2.55 * level);
      const R = (num >> 16) - amt;
      const G = (num >> 8 & 0x00FF) - amt;
      const B = (num & 0x0000FF) - amt;
      return '#' + (0x1000000 + (R > 0 ? R > 255 ? 255 : R : 0) * 0x10000 + (G > 0 ? G > 255 ? 255 : G : 0) * 0x100 + (B > 0 ? B > 255 ? 255 : B : 0)).toString(16).slice(1);
    },

    [Actions.SET_THEME_COLOR] (hexColor: string) {
      try {
        const root = document.documentElement;

        root.style.setProperty(this.variables.PRIMARY_COLOR, hexColor);
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-3`, this[Actions.SET_COLOR_LIGHTER](hexColor, 9));
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-5`, this[Actions.SET_COLOR_LIGHTER](hexColor, 8));
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-7`, this[Actions.SET_COLOR_LIGHTER](hexColor, 7));
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-8`, this[Actions.SET_COLOR_LIGHTER](hexColor, 5));
        // ℹ️ This variable light primary 9 override dark mode and light mode
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-9`, this.isDark ? this[Actions.SET_COLOR_DARKER](hexColor, 80) : this[Actions.SET_COLOR_LIGHTER](hexColor, 80));
        root.style.setProperty(`${this.variables.PRIMARY_COLOR}-dark-2`, this[Actions.SET_COLOR_DARKER](hexColor, 2));

        //  ℹ️ Override toastify
        root.style.setProperty(`${this.variables.TOASTIFY_COLOR_LIGHT}`, `var(${this.variables.BACKGROUND_COLOR})`)
        root.style.setProperty(`${this.variables.TOASTIFY_TEXT_COLOR_LIGHT}`, this.isDark ? '#FFF' : '#000')

        this.themeColor = hexColor;
      }
      catch(e) {
        throw new Error(e as string);
      }
    },

    [Actions.TOGGLE_DARK_MODE] () {
      try {
        const root = document.documentElement;

        // ℹ️ This variable light primary 9 override dark mode and light mode
        if (this.isDark) {
          root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-9`, this[Actions.SET_COLOR_LIGHTER](this.themeColor, 80));
          //  ℹ️ Override toastify
          root.style.setProperty(`${this.variables.TOASTIFY_COLOR_LIGHT}`, `var(${this.variables.BACKGROUND_COLOR})`)
          root.style.setProperty(`${this.variables.TOASTIFY_TEXT_COLOR_LIGHT}`, '#000')

          root.classList.remove('dark');
          this.isDark = false;
        } else {
          root.style.setProperty(`${this.variables.PRIMARY_COLOR}-light-9`, this[Actions.SET_COLOR_DARKER](this.themeColor, 80));
          //  ℹ️ Override toastify
          root.style.setProperty(`${this.variables.TOASTIFY_COLOR_LIGHT}`, `var(${this.variables.BACKGROUND_COLOR})`)
          root.style.setProperty(`${this.variables.TOASTIFY_TEXT_COLOR_LIGHT}`, '#FFF')

          root.classList.add('dark');
          this.isDark = true;
        }
      }
      catch(e) {
        throw new Error(e as string);
      }
    },
  },
})
