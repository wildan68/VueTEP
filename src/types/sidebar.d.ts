import type { FunctionalComponent, SVGAttributes } from 'vue'

export interface ISidebar {
  key: string
  label: string
  icon?: FunctionalComponent<SVGAttributes>
  route?: string
  children?: ISidebar[]
  childrenOpen?: boolean
  action?: () => void
}