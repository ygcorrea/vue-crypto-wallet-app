import { onAuthenticate } from '../../services/authentication';

export default {
  data: () => ({
    isValidForm: false,
    username: 'vicky',
    password: 'secret',
    snackbar: false,
    loadingData: false,
    errorMessage: '',
  }),

  methods: {
    async onClickLoginButton() {
      if (this.isValidForm) {
        this.loadingData = true;
        try {
          const service = onAuthenticate(this.username, this.password);
          const { access_token } = await service;
          localStorage.setItem('token', `Bearer ${access_token}`);
          this.$router.push('/');
        } catch (error) {
          if (error.response.status == 401) {
            this.errorMessage = error.response.data.detail;
            this.snackbar = true;
          } else {
            this.errorMessage = 'Something went wrong! Please try again later...';
          }
          localStorage.removeItem('token');
        }
        this.loadingData = false;
      }
    },
  },
};
