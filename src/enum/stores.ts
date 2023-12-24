enum Actions {
  // THEME MODULE
  SET_COLOR_LIGHTER = 'setColorLighter',
  SET_COLOR_DARKER = 'setColorDarker',
  SET_THEME_COLOR = 'setThemeColor',
  TOGGLE_DARK_MODE = 'toggleDarkMode',
  CONVERT_TO_RGB = 'convertToRGB',

  // STEPPER MODULE
  SET_ACTIVE_STEP = 'setActiveStep',
}

enum Getters {
  // THEME MODULE
  GET_THEME_VARIABLES = 'getThemeVariables',

  // STEPPER MODULE
  GET_ACTIVE_STEP = 'getActiveStep',
  GET_FORMS = 'getForms',
}

export { Actions, Getters }