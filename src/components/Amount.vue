<template>
  <div class="amount__container">
    <section v-for="(key, value) in balance" :key="key">
      <span>
        {{ key }}
        <strong>
          {{ value }}
        </strong>
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AmountAvailable',
  props: ['balance'],
};
</script>

<style lang="scss" scoped>
.amount {
  &__container {
    border: 1px solid #020024;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 600px) {
      // flex-direction: column;
    }
    span {
      font-size: 2rem;
      width: 200px;
      margin: 10px;
      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
}
</style>
