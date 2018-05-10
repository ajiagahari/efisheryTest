// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Pokemon from 'pokemontcgsdk'
Vue.use(Pokemon)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Pokemon,
  components: { App },
  template: '<App/>'
})
