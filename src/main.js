import Vue from 'vue'; /* eslint-disable */
import App from './App.vue';
import router from './router/router';
import vuetify from './plugins/vuetify';
import store from './store/store';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
