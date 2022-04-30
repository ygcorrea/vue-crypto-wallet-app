<template>
  <v-container>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          @click="$router.push('/')"
          alt="Logo"
          class="shrink mr-2 img__content"
          contain
          src="../assets/img/wallet.png"
          transition="scale-transition"
          width="50"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn dark text @click="onLogoutClick">
        <span class="hidden-sm-and-down white--text"> Logout </span>
        <v-icon class="ml-2">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    onLogoutClick() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>
<style lang="scss">
.v-toolbar__content,
.v-toolbar__extension {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 21, 35, 1) 35%,
    rgba(77, 197, 210, 1) 100%
  );
}
.btn__text {
  span {
    color: white;
  }
}
.img__content {
  cursor: pointer;
}
</style>
