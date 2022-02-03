import Theme from 'vitepress/dist/client/theme-default'
import Tree from '../../../iuui/tree'
import Search from '../../../iuui/search'
import Input from '../../../iuui/input'
import Skeleton from '../../../iuui/skeleton'
import Switch from '../../../iuui/switch'
import Modal from '../../../iuui/modal'
import Button from '../../../iuui/button'
import Ripple from '../../../iuui/ripple'
import Card from '../../../iuui/card'
import Tooltip from '../../../iuui/tooltip'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Tree)
    app.use(Input)
    app.use(Search)
    app.use(Skeleton)
    app.use(Switch)
    app.use(Modal)
    app.use(Button)
    app.use(Ripple)
    app.use(Card)
    app.use(Tooltip)
    registerComponents(app)
  }
}
