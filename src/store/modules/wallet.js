import router from '@/router/router';
import { walletData } from '../../services/wallet';

const state = {
  transactions: [],
  balance: {},
  loadingStatus: false,
  snackbar: false,
  snackbarMessage: null,
};

const actions = {
  async getWalletData({ commit }) {
    try {
      commit('SET_LOADING', true);
      const service = walletData();
      const { balance, transactions } = await service;
      commit('SET_TRANSACTIONS', transactions.reverse().slice(0, 5));
      commit('SET_BALANCE', balance);
      commit('SET_LOADING', false);
    } catch (error) {
      localStorage.removeItem('token');
      router.push({ name: 'Login' });
      commit('SET_SNACKBAR', true);
      commit('SET_SNACKBAR_MSG', error.response.data.detail[0].msg);
    }
  },
};

const mutations = {
  SET_TRANSACTIONS(state, payload) {
    state.transactions = payload;
  },
  SET_BALANCE(state, payload) {
    state.balance = payload;
  },
  SET_LOADING(state, loadingStatus) {
    state.loadingStatus = loadingStatus;
  },
  SET_SNACKBAR(state, showSnackbar) {
    state.snackbar = showSnackbar;
  },
  SET_SNACKBAR_MSG(state, snackbarMessage) {
    state.snackbarMessage = snackbarMessage;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
