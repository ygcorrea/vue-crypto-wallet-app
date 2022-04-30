<template>
  <v-app id="app">
    <app-bar v-if="!$route.meta.hideAppBar" />
    <router-view> </router-view>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  name: 'App',
  components: { AppBar },
};
</script>
<style>
#app {
  background-color: #fff;
  height: 100vh;
}
</style>
