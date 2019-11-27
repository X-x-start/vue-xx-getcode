import Getcode from './getcode'
import _Vue from 'vue'

Getcode.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Getcode.name, Getcode)
}
export default Getcode;
