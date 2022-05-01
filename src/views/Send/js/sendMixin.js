import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      initialState: {
        description: null,
        amount: null,
        currency: null,
        receiver: null,
      },
    };
  },
  methods: {
    ...mapActions('send', ['getContactsData', 'onSendTransaction']),
    resetFormValidation() {
      this.$refs.formSend.resetValidation();
      this.$refs.formSend.reset();
      window.location.reload();
    },
  },
  computed: {
    ...mapState('send', [
      'contactsList',
      'snackbarColor',
      'snackbarMessage',
      'payloadData',
      'loadingStatus',
    ]),
    ...mapState('wallet', ['transactions', 'balance']),
    validSend: {
      get() {
        return this.$store.state.send.validSend;
      },
      set(value) {
        this.$store.commit('send/SET_VALID_FORM', value);
      },
    },
    payloadData: {
      get() {
        return this.$store.state.send.payloadData;
      },
      set(value) {
        this.$store.commit('send/SET_TRANSACTION', value);
      },
    },
    snackbar: {
      get() {
        return this.$store.state.send.snackbar;
      },
      set(value) {
        this.$store.commit('send/SET_SNACKBAR', value);
      },
    },
  },

  created() {
    this.getContactsData();
  },
};
