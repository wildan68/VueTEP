import type { ISidebar } from "@/types/sidebar"
import IconDashboard from '~icons/tabler/dashboard'
import IconComponents from '~icons/tabler/components'
import router from "@/router"
import { createVNode, render } from "vue"
import { ElDialog } from "element-plus"

export const useSidebar = () => {
  const sidebarMenu = reactive<ISidebar[]>([
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: IconDashboard,
      action: () => router.push('/'),
    }, {
      key: 'components',
      label: 'Components',
      childrenOpen: false,
      children: [
        {
          key: 'button',
          label: 'Button',
          icon: IconComponents,
          action: () => router.push('/components/button'),
        }, {
          key: 'input',
          label: 'Input',
          icon: IconComponents,
        },
      ],
    }, {
      key: 'charts',
      label: 'Charts',
      action: () => {
        const dialog = createVNode(ElDialog, {
          title: "Charts",
          modelValue: true,
          "onUpdate:modelValue": (val: boolean) => {
            if (!val) {
              render(null, document.body)
            }
          },
        }, {
          default: () => "Coming Soon",
        })
        
        render(dialog, document.body)
      },
    }, {
      key: 'forms',
      label: 'Forms',
      childrenOpen: false,
      children: [
        {
          key: 'basic',
          label: 'Basic',
        }, {
          key: 'validation',
          label: 'Validation',
        },
      ],
    },
  ])

  const openChildren = (key: string) => {
    sidebarMenu.forEach((item) => {
      if (item.children) {
        if (item.key === key) {
          item.childrenOpen = !item.childrenOpen
        } else {
          item.childrenOpen = false
        }
      }
    })
  }

  return {
    sidebarMenu,
    openChildren,
  }
}