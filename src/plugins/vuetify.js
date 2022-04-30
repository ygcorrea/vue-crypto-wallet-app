import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#020024',
        secondary: '#4dc5d2',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
