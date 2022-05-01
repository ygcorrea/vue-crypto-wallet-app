import router from '@/router/router';
import { contactsData } from '../../services/contacts';
import { onSendValue } from '../../services/send';

const state = {
  contactsList: [],
  payloadData: {
    description: null,
    amount: null,
    currency: null,
    receiver: null,
  },
  snackbarMessage: null,
  snackbarColor: null,
  snackbar: false,
  loadingStatus: false,
  validSend: false,
};

const actions = {
  async getContactsData({ commit }) {
    try {
      const service = contactsData();
      const contacts = await service;
      commit('SET_CONTACTS', contacts);
    } catch (error) {
      localStorage.removeItem('token');
      router.push({ name: 'Login' });
    }
  },
  async onSendTransaction({ commit, state }) {
    commit('SET_LOADING', true);
    if (state.validSend == true) {
      try {
        await onSendValue(state.payloadData);
        commit('SET_SNACKBAR', true);
        commit('SET_SNACKBAR_MSG', 'Yay! Your transaction has been sended');
        commit('SET_SNACKBAR_COLOR', 'green accent-4');
      } catch (error) {
        commit('SET_SNACKBAR', true);
        commit('SET_SNACKBAR_MSG', error.response.data.detail[0].msg);
        commit('SET_SNACKBAR_COLOR', 'red lighten-1');

        if (error.response.status === 401) {
          commit('SET_SNACKBAR', true);
          commit('SET_SNACKBAR_MSG', error.response.data.detail[0].msg);
          localStorage.removeItem('token');
          router.push({ name: 'Login' });
        }

        if (error.response.status === 422) {
          commit('SET_SNACKBAR', true);
          commit('SET_SNACKBAR_MSG', error.response.data.detail[0].msg);
        }
      }
      commit('RESET_FORM');
    } else {
      commit('SET_SNACKBAR', true);
      commit('SET_SNACKBAR_MSG', 'Fill all required fields before press send');
      commit('SET_SNACKBAR_COLOR', 'red lighten-1');
    }
    commit('SET_LOADING', false);
  },
};

const mutations = {
  SET_TRANSACTION(state, payload) {
    state.payloadData = payload;
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
  SET_SNACKBAR_COLOR(state, snackbarColor) {
    state.snackbarColor = snackbarColor;
  },
  SET_CONTACTS(state, contactList) {
    state.contactsList = contactList;
  },
  SET_VALID_FORM(state, validSend) {
    state.validSend = validSend;
  },
  RESET_FORM(state) {
    Object.keys(state.payloadData).forEach((key) => {
      state.payloadData[key] = null;
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
