enum Actions {
  // THEME MODULE
  SET_COLOR_LIGHTER = 'setColorLighter',
  SET_COLOR_DARKER = 'setColorDarker',
  SET_THEME_COLOR = 'setThemeColor',
  TOGGLE_DARK_MODE = 'toggleDarkMode',
  CONVERT_TO_RGB = 'convertToRGB',

  // STEPPER MODULE
  SET_ACTIVE_STEP = 'setActiveStep',
  GET_COUNTRY_LIST = 'getCountryList',

  // SIDEBAR MODULE
  TOGGLE_SIDEBAR = 'toggleSidebar',
  TOGGLE_SIDEBAR_HOVERED = 'toggleSidebarHovered',
}

enum Getters {
  // THEME MODULE
  GET_THEME_VARIABLES = 'getThemeVariables',

  // STEPPER MODULE
  GET_ACTIVE_STEP = 'getActiveStep',
  GET_FORMS = 'getForms',

  // SIDEBAR MODULE
  GET_SIDEBAR_WIDTH = 'getSidebarWidth',
  GET_COLLAPSED = 'getCollapsed',
  GET_SIDEBAR_HOVERED = 'getSidebarHovered',
}

export { Actions, Getters }