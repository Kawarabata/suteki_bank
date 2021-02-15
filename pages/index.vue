<template>
  <div class="home">
    <button class="logout-button" @click="googleLogout">ログアウト</button>
    <title-header :price-sum="priceSum" />
    <months-ribbon />
    <button class="add-button" @click="openModal">
      <img src="@/assets/images/button_add.svg" alt="追加" />
    </button>
    <div class="table-container">
      <sutekis-table :sutekis="sutekis" />
    </div>
    <form-modal
      v-if="isModalOpen"
      :is-submittable="isSubmittable"
      @close-modal="closeModal"
      @update-date="updateParams('date', $event)"
      @update-text="updateParams('text', $event)"
      @update-price="updateParams('price', Math.floor($event))"
      @submit="submit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    }
  },
  computed: {
    isSignedIn() {
      return this.$store.state.me.isSignedIn
    },

    sutekis() {
      return this.$store.state.suteki.sutekis
    },

    priceSum() {
      if (this.sutekis.length === 0) return

      const prices = this.sutekis.map((suteki) => +suteki.price)
      return prices.reduce((a, b) => {
        return a + b
      })
    },

    params() {
      return this.$store.state.suteki.params
    },

    isSubmittable() {
      return (
        !!this.params.text &&
        !!this.params.price &&
        !!this.params.date &&
        this.params.price > 0
      )
    },
  },
  methods: {
    googleLogout() {
      this.$store.dispatch('me/signOut')
    },

    openModal() {
      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false
    },

    updateParams(fieldName, value) {
      this.$store.commit('suteki/updateParams', { [fieldName]: value })
    },

    submit() {
      if (!this.isSubmittable) return

      this.updateParams('userId', this.$store.state.me.id)
      this.$store.dispatch('suteki/addSuteki')
      this.closeModal()
    },
  },
}
</script>

<style scoped lang="postcss">
.home {
  margin: 0 auto;
  padding-bottom: 100px;
  min-height: 100vh;

  & .logout-button {
    color: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & .table-container {
    max-width: 580px;
    padding: 12px;
    margin: 0 auto;
  }

  & .add-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
}
</style>
