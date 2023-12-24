import type { ISidebar } from "@/types/sidebar"
import IconDashboard from '~icons/tabler/dashboard'
import IconComponents from '~icons/tabler/components'
import IconTimeline from '~icons/tabler/timeline'
import IconToggleRight from '~icons/tabler/toggle-right'
import IconAppWindow from '~icons/tabler/app-window'
import IconMap from '~icons/tabler/map'
import IconTable from '~icons/tabler/table'
import router from "@/router"
import { createVNode, render } from "vue"
import { ElDialog } from "element-plus"

export const useSidebar = () => {
  const route = useRoute()
  const sidebarWidth = ref<number>(262)

  const sidebarMenu = reactive<ISidebar[]>([
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: IconDashboard,
      action: () => router.push('/'),
    }, {
      key: 'components-group',
      label: 'All Components',
      isGroup: true,
    }, {
      key: 'components',
      label: 'Components',
      icon: IconComponents,
      childrenOpen: false,
      children: [
        {
          key: 'button',
          label: 'Button',
          icon: IconComponents,
          action: () => router.push('/components/button'),
        }, {
          key: 'checkbox',
          label: 'Checkbox',
          icon: IconComponents,
          action: () => router.push('/components/checkbox'),
        }, {
          key: 'datepicker',
          label: 'Date Picker',
          icon: IconComponents,
          action: () => router.push('/components/datepicker'),
        }, {
          key: 'dialog',
          label: 'Dialog',
          icon: IconComponents,
          action: () => router.push('/components/dialog'),
        }, {
          key: 'input',
          label: 'Input',
          icon: IconComponents,
          action: () => router.push('/components/input'),
        },{
          key: 'radio',
          label: 'Radio',
          icon: IconComponents,
          action: () => router.push('/components/radio'),
        }, {
          key: 'select',
          label: 'Select',
          icon: IconComponents,
          action: () => router.push('/components/select'),
        }, {
          key: 'switch',
          label: 'Switch',
          icon: IconComponents,
          action: () => router.push('/components/switch'),
        }, {
          key: 'toast',
          label: 'Toast',
          icon: IconComponents,
          action: () => router.push('/components/toast'),
        },
      ],
    }, {
      key: 'charts',
      label: 'Charts',
      icon: IconTimeline,
      action: () => router.push('/charts'),
    }, {
      key: 'maps',
      label: 'Maps',
      icon: IconMap,
      action: () => router.push('/maps'),
    }, {
      key: 'vnode',
      label: 'Virtual Node',
      icon: IconAppWindow,
      action: () => {
        const dialog = createVNode(ElDialog, {
          title: 'Virtual Node',
          modelValue: true,
          'onUpdate:modelValue': (val: boolean) => {
            if (!val) {
              render(null, document.body)
            }
          },
        }, {
          default: () => 'Virtual Node create using VNode with Element Plus Dialog',
        })
        
        render(dialog, document.body)
      },
    }, {
      key: 'forms-group',
      label: 'Forms & Tables',
      isGroup: true,
    }, {
      key: 'forms',
      label: 'Forms',
      icon: IconToggleRight,
      childrenOpen: false,
      children: [
        {
          key: 'basic',
          label: 'Basic',
        }, {
          key: 'validation',
          label: 'Validation',
          action: () => router.push('/forms/validation'),
        }, {
          key: 'stepper',
          label: 'Stepper',
          action: () => router.push('/forms/stepper'),
        },
      ],
    }, {
      key: 'table',
      label: 'Data Table',
      icon: IconTable,
      action: () => router.push('/table'),
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

  onMounted(() => {
    const { path } = route
  
    const paths = path.split('/').pop() || 'dashboard'

    sidebarMenu.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (child.key === paths) {
            item.childrenOpen = true
          }
        })
      }
    })
  })

  return {
    sidebarMenu,
    openChildren,
    sidebarWidth,
  }
}