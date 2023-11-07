export interface ISidebar {
  key: string
  label: string
  icon?: string
  route?: string
  children?: ISidebar[]
}