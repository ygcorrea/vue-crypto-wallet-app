import Vue from 'vue';
import Vuex from 'vuex';
import wallet from './modules/wallet';
import send from './modules/send';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    send,
    wallet,
  },
});

export default store;
