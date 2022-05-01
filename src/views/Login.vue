<template>
  <v-main class="main__background">
    <v-container fill-height class="justify-center">
      <v-form ref="form" v-model="isValidForm" class="login__container">
        <v-img alt="logo" min-width="100" src="../assets/img/wallet.png" contain />
        <span> Sign in to access your crypto wallet </span>
        <div class="login__form">
          <v-text-field
            required
            v-model="payloadAuth.username"
            label="Login"
            outlined
            rounded
            :rules="[(v) => !!v || 'Login is required']"
            dense
            solo
          ></v-text-field>
          <v-text-field
            required
            v-model="payloadAuth.password"
            label="Password"
            type="password"
            outlined
            rounded
            :rules="[(v) => !!v || 'Password is required']"
            dense
            solo
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            block
            x-large
            color="secondary"
            :loading="loadingData"
            @click="onClickLoginButton"
            >Sign in</v-btn
          >
        </div>
      </v-form>
    </v-container>
    <v-snackbar class="pa-1" :color="snackbarColor" right top v-model="snackbar">
      <span class="snackbar__title"> {{ snackbarMessage }} </span>

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import loginMixin from './mixins/authMixin';

export default {
  name: 'LoginView',
  mixins: [loginMixin],
};
</script>
<style lang="scss" scoped>
.main {
  &__background {
    background: url(../assets/img/background.jpg) no-repeat center center fixed;
    background-size: cover;
  }
}
.login {
  &__container {
    background: rgb(1 19 31 / 74%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.8px);
    -webkit-backdrop-filter: blur(9.8px);
    border: 1px solid rgba(255, 255, 255, 0.07);
    height: 400px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      color: #fafafa;
      padding: 10px;
    }
  }
  &__form {
    height: 400px;
    width: 60%;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
