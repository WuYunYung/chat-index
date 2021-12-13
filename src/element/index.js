// 导入自己需要的组件
import { Button, Form, FormItem, Input, Message, Avatar } from 'element-ui'
const element = {
  install (Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Avatar)

    Vue.prototype.$message = Message
  }
}
export default element
