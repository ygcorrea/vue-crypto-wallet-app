<template>
  <v-main>
    <section id="wallet">
      <v-container justify="center" align="center" class="wallet__container">
        <v-row class="col-12" justify="space-between">
          <h1>My Wallet</h1>
          <router-link to="/send" tag="button">
            <v-icon size="30" class="mb-1" color="#302b2b">mdi-bitcoin</v-icon>
            <span class="ml-2 btn__text">Send Crypto</span>
          </router-link>
        </v-row>
        <v-divider class="divider"></v-divider>
        <amount :balance="balance" />
        <v-progress-linear
          :indeterminate="loadingStatus"
          color="primary"
          v-if="loadingStatus"
        ></v-progress-linear>
        <div class="font-weight-bold ml-8 mb-5 mt-5">Last transactions</div>
        <v-timeline align-top dense v-if="transactions.length">
          <v-timeline-item
            v-for="(transaction, i) in transactions"
            :key="i"
            color="primary"
            icon="mdi-cash-fast"
          >
            <div>
              <div class="font-weight-normal">
                <div>
                  <strong class="primary--text">{{
                    transaction.description || 'Crypto transfer'
                  }}</strong>
                  <i class="grey--text"> ({{ transaction.status }}) </i>
                </div>
                <span class="font-weight-bold">
                  {{ transaction.amount }} {{ transaction.currency }}
                </span>
                <div>
                  <span class="grey--text">to: </span>
                  {{ transaction.receiver }}
                </div>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <section v-else class="d-flex flex-column align-center empty__state">
          <i class="grey--text"> You haven't made transactions yet </i>
          <v-img max-width="200" class="mt-8" src="@/assets/img/empty-state.svg" />
        </section>
      </v-container>
    </section>
  </v-main>
</template>
<script>
import Amount from '@/components/Amount.vue';
import walletMixin from '../Wallet/js/walletMixin';

export default {
  components: { Amount },
  name: 'WalletView',
  mixins: [walletMixin],
};
</script>
<style lang="scss">
.btn__text {
  text-transform: none;
  font-size: 18px;
}
.wallet {
  &__container {
    height: 600px;
  }
}
.empty__state {
  font-size: 1.5em;
}
</style>
