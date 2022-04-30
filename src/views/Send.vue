<template>
  <v-main>
    <section id="send">
      <v-container justify="center" align="center" class="wallet__container">
        <v-row class="col-12" justify="space-between">
          <h1>Send crypto to contacts</h1>
          <div>snackbar: {{ this.$store.state.send.snackbar }}</div>
          <div>validSend: {{ this.$store.state.send.validSend }}</div>
          <div>payloadData: {{ this.$store.state.send.payloadData }}</div>

          <router-link to="/" tag="button">
            <v-icon size="30" class="mb-1" color="#302b2b">mdi-wallet</v-icon>
            <span class="ml-2 btn__text">Wallet</span>
          </router-link>
        </v-row>
        <v-divider class="divider"></v-divider>
        <amount :balance="balance" />
        <v-form ref="form" v-model="validSend" lazy-validation>
          <v-container>
            <v-row class="d-flex align-center">
              <v-col>
                <v-text-field
                  color="black"
                  type="text"
                  label="Description"
                  class="pa-3"
                  v-model="payloadData.description"
                  filled
                  outlined
                ></v-text-field>
                <v-select
                  color="black"
                  required
                  :rules="[(v) => !!v || 'Currency is required']"
                  type="number"
                  label="Select the currency"
                  filled
                  outlined
                  class="pa-3"
                  :items="Object.keys(balance)"
                  v-model="payloadData.currency"
                >
                </v-select>
              </v-col>

              <v-col>
                <v-text-field
                  required
                  type="number"
                  outlined
                  color="black"
                  :rules="[(v) => !!v || 'This field cannot be empty']"
                  label="How much do you want to send?"
                  class="pa-3"
                  v-model="payloadData.amount"
                  filled
                ></v-text-field>
                <v-select
                  :rules="[(v) => !!v || 'Select a contact is required']"
                  required
                  color="black"
                  type="number"
                  outlined
                  label="Select the contact"
                  class="pa-3"
                  filled
                  :items="contactsList"
                  item-text="name"
                  v-model="payloadData.receiver"
                  item-value="email"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-btn
                block
                large
                class="primary mb-2"
                @click="onSendTransaction()"
                :loading="loadingStatus"
                >Send</v-btn
              >
            </v-row>
          </v-container>
        </v-form>
      </v-container>
    </section>
    <v-snackbar class="pa-1" :color="snackbarColor" right top v-model="snackbar">
      <span class="snackbar__title"> {{ snackbarMessage }} </span>

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click.native="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import Amount from '@/components/Amount.vue';
import walletMixin from '../views/mixins/walletMixin';
import sendMixin from './mixins/sendMixin';

export default {
  name: 'SendView',
  mixins: [walletMixin, sendMixin],
  components: { Amount },
};
</script>

<style lang="scss">
.btn__text {
  text-transform: none;
}
.snackbar {
  &__title {
    color: #fafafa;
  }
}
.v-snack__content {
  padding: 30px;
}
</style>
