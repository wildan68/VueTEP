import type { FunctionalComponent, SVGAttributes } from 'vue'

export interface ISidebar {
  key: string
  label: string
  isGroup?: boolean
  icon?: FunctionalComponent<SVGAttributes>
  route?: string
  children?: ISidebar[]
  childrenOpen?: boolean
  action?: () => void
}