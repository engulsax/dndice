import Vue from 'vue'
import App from './app.vue'
import './register.service.worker';
import './style/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
