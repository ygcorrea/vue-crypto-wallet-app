import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions('wallet', ['getWalletData']),
  },
  computed: {
    ...mapState('wallet', [
      'transactions',
      'balance',
      'loadingStatus',
      'snackbar',
      'snackbarMessage',
    ]),
  },
  created() {
    this.getWalletData();
  },
};
