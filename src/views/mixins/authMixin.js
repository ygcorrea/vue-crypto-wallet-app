import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions('authentication', ['onClickLoginButton']),
  },
  computed: {
    ...mapState('authentication', [
      'snackbar',
      'loadingData',
      'errorMessage',
      'snackbarColor',
      'snackbarMessage',
      'payloadAuth',
    ]),
    isValidForm: {
      get() {
        return this.$store.state.authentication.isValidForm;
      },
      set(value) {
        this.$store.commit('authentication/SET_VALID_FORM', value);
      },
    },
    payloadAuth: {
      get() {
        return this.$store.state.authentication.payloadAuth;
      },
      set(value) {
        this.$store.commit('authentication/SET_PAYLOAD_AUTH', value);
      },
    },
    snackbar: {
      get() {
        return this.$store.state.authentication.snackbar;
      },
      set(value) {
        this.$store.commit('authentication/SET_SNACKBAR', value);
      },
    },
  },
};
