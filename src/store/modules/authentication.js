import router from '@/router/router';
import { onAuthenticate } from '../../services/authentication';

const state = {
  isValidForm: true,
  payloadAuth: {
    username: '',
    password: '',
  },
  snackbar: false,
  snackbarColor: null,
  snackbarMessage: null,
  loadingData: false,
};

const actions = {
  async onClickLoginButton({ commit, state }) {
    if (state.isValidForm) {
      try {
        commit('SET_LOADING', true);
        const service = onAuthenticate(state.payloadAuth.username, state.payloadAuth.password);
        const { access_token } = await service;
        localStorage.setItem('token', `Bearer ${access_token}`);
        router.push({ name: 'Home' });
        commit('RESET_FORM');
        commit('SET_LOADING', false);
      } catch (error) {
        commit('SET_SNACKBAR', true);
        commit('SET_SNACKBAR_COLOR', 'red lighten-1');

        if (error.response.status == 401) {
          commit('SET_SNACKBAR_MSG', error.response.data.detail);
        }

        if (error.response.status == 422) {
          commit('SET_SNACKBAR_MSG', 'Username and Password are required fields.');
        }
      }
    } else {
      commit('SET_SNACKBAR', true);
      commit('SET_SNACKBAR_MSG', 'Fill all required fields before press login');
      commit('SET_SNACKBAR_COLOR', 'red lighten-1');
    }
    commit('SET_LOADING', false);
  },
};

const mutations = {
  SET_LOADING(state, loadingStatus) {
    state.loadingStatus = loadingStatus;
  },
  SET_SNACKBAR(state, showSnackbar) {
    state.snackbar = showSnackbar;
  },
  SET_SNACKBAR_MSG(state, snackbarMessage) {
    state.snackbarMessage = snackbarMessage;
  },
  SET_SNACKBAR_COLOR(state, snackbarColor) {
    state.snackbarColor = snackbarColor;
  },
  SET_VALID_FORM(state, isValidForm) {
    state.isValidForm = isValidForm;
  },
  SET_PAYLOAD_AUTH(state, payloadAuth) {
    state.payloadAuth = payloadAuth;
  },
  RESET_FORM(state) {
    Object.keys(state.payloadAuth).forEach((key) => {
      state.payloadAuth[key] = null;
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
