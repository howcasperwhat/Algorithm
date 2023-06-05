import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import './custom.css'
import './progress.css'
import './scroll-bar.css'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return
    router.onBeforeRouteChange = () => {
      NProgress.start()
    }
    router.onAfterRouteChanged = () => {
      NProgress.done()
    }
  }
}