// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"
import "./utils/js/flexble.js"
import { DatePicker, TimePicker } from "element-ui"
Vue.config.productionTip = false

import Header from "./components/header"
import alert from "./components/alert/index"


Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.component("Header", Header)

let alertClass = Vue.extend(alert)
Vue.prototype.$alert = (text) => {
  let alertComponent = new alertClass({
    propsData: {
      text
    }
  })
  alertComponent.$mount()
  document.body.appendChild(alertComponent.$el)
}



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
