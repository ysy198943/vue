import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // vue内部初始化的入口
  this._init(options)
}

// 给vue实例原型添加方法
//@ts-expect-error Vue has function type
initMixin(Vue)
//@ts-expect-error Vue has function type
// $data $props $set $del $watch
stateMixin(Vue)
//@ts-expect-error Vue has function type
// $on $of $once $emit
eventsMixin(Vue)
//@ts-expect-error Vue has function type
// $foreceUpdate
lifecycleMixin(Vue)
//@ts-expect-error Vue has function type
$nextTicket
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
