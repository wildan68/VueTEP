import type { ISidebar } from "@/types/sidebar"
import IconDashboard from '~icons/tabler/dashboard'
import IconComponents from '~icons/tabler/stack-front'
import IconPoint from '~icons/tabler/point'
import IconTimeline from '~icons/tabler/timeline'
import IconToggleRight from '~icons/tabler/toggle-right'
import IconAppWindow from '~icons/tabler/app-window'
import IconMap from '~icons/tabler/map'
import IconTable from '~icons/tabler/table'
import IconSpeakerphone from '~icons/tabler/speakerphone'
import IconExternalLink from '~icons/tabler/external-link'
import IconUpload from '~icons/tabler/upload'
import IconFirebase from '~icons/tabler/brand-firebase'
import IconInstallation from '~icons/tabler/michelin-star'
import IconSlideshow from '~icons/tabler/slideshow'
import IconEdit from '~icons/tabler/edit'
import IconChalkBoard from '~icons/tabler/chalkboard'
import IconLayoutBoard from '~icons/tabler/layout-board'
import IconBraces from '~icons/tabler/braces'
import router from "@/router"
import { createVNode, render } from "vue"
import { ElDialog } from "element-plus"
import { useSidebarStore } from "@/stores"
import { Actions, Getters } from "@/enum/stores"

export const useSidebar = () => {
  const route = useRoute()
  const store = useSidebarStore()
  const sidebarWidth = computed<number>(() => store[Getters.GET_SIDEBAR_WIDTH])
  const sidebarCollapsed = computed<boolean>(() => store[Getters.GET_COLLAPSED])
  const sidebarHovered = computed<boolean>(() => store[Getters.GET_SIDEBAR_HOVERED])

  /**
   * Sidebar Menu
   * @type {ISidebar[]}
   * key: string - must be the same as the component name in pages
   * label: string - label for the menu
   * icon: any - icon for the menu
   * action: () => void - action when menu is clicked.
   * isGroup: boolean - if true, it will be a group menu
   */
  const sidebarMenu = reactive<ISidebar[]>([
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: IconDashboard,
      action: () => router.push('/'),
    }, {
      key: 'installation',
      label: 'Installation',
      icon: IconInstallation,
      action: () => router.push('/installation'),
    }, {
      key: 'pages-group',
      label: 'Pages & Layouts',
      isGroup: true,
    }, {
      key: 'pages',
      label: 'Pages',
      icon: IconLayoutBoard,
      childrenOpen: false,
      children: [
        {
          key: 'login',
          label: 'Login Page',
          icon: IconPoint,
          action: () => router.push('/pages/login'),
        }, {
          key: 'register',
          label: 'Register Page',
          icon: IconPoint,
          action: () => router.push('/pages/register'),
        }, {
          key: '404',
          label: '404 Page',
          icon: IconPoint,
          action: () => router.push('/pages/404'),
        },
      ],
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
          icon: IconPoint,
          action: () => router.push('/components/button'),
        }, {
          key: 'checkbox',
          label: 'Checkbox',
          icon: IconPoint,
          action: () => router.push('/components/checkbox'),
        }, {
          key: 'datepicker',
          label: 'Date Picker',
          icon: IconPoint,
          action: () => router.push('/components/datepicker'),
        }, {
          key: 'dialog',
          label: 'Dialog',
          icon: IconPoint,
          action: () => router.push('/components/dialog'),
        }, {
          key: 'input',
          label: 'Input',
          icon: IconPoint,
          action: () => router.push('/components/input'),
        },{
          key: 'radio',
          label: 'Radio',
          icon: IconPoint,
          action: () => router.push('/components/radio'),
        }, {
          key: 'select',
          label: 'Select',
          icon: IconPoint,
          action: () => router.push('/components/select'),
        }, {
          key: 'switch',
          label: 'Switch',
          icon: IconPoint,
          action: () => router.push('/components/switch'),
        }, {
          key: 'more',
          label: 'Element Plus',
          icon: IconExternalLink,
          action: () => window.open('https://element-plus.org/en-US/component/button.html', '_blank'),
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
      key: 'toast',
      label: 'Toast',
      icon: IconSpeakerphone,
      action: () => router.push('/toast'),
    }, {
      key: 'uploader',
      label: 'File Uploader',
      icon: IconUpload,
      action: () => router.push('/uploader'),
    }, {
      key: 'carousel',
      label: 'Carousel',
      icon: IconSlideshow,
      action: () => router.push('/carousel'),
    }, {
      key: 'texteditor',
      label: 'Text Editor',
      icon: IconEdit,
      childrenOpen: false,
      children: [
        {
          key: 'editorjs',
          label: 'Editor JS',
          icon: IconPoint,
          action: () => router.push('/texteditor/editorjs'),
        }, {
          key: 'froala',
          label: 'Froala',
          icon: IconPoint,
          action: () => router.push('/texteditor/froala'),
        },
      ],
    }, {
      key: 'onboarding',
      label: 'Onboarding',
      icon: IconChalkBoard,
      action: () => router.push('/onboarding'),
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
          default: () => 'Virtual Node create using with Element Plus Dialog',
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
          key: 'form-schema',
          label: 'Form Schema',
          icon: IconBraces,
          action: () => router.push('/form-schema'),
        }, {
          key: 'validation',
          label: 'Validation',
          icon: IconPoint,
          action: () => router.push('/forms/validation'),
        }, {
          key: 'stepper',
          label: 'Stepper',
          icon: IconPoint,
          action: () => router.push('/forms/stepper'),
        }, {
          key: 'inlinedit',
          label: 'Inline Edit',
          icon: IconPoint,
          action: () => router.push('/forms/inlinedit'),
        },
      ],
    }, {
      key: 'table',
      label: 'Data Table',
      icon: IconTable,
      action: () => router.push('/table'),
    },
    {
      key: 'data',
      label: 'Data',
      isGroup: true,
    }, {
      key: 'firebase',
      label: 'Firebase',
      icon: IconFirebase,
      action: () => router.push('/firebase'),
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

  const onToggleSidebar = () => store[Actions.TOGGLE_SIDEBAR]()

  const onToggleSidebarHovered = () => store[Actions.TOGGLE_SIDEBAR_HOVERED]()

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
    sidebarCollapsed,
    onToggleSidebar,
    onToggleSidebarHovered,
    sidebarHovered,
  }
}