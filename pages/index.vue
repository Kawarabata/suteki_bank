<template>
  <div class="home">
    <button class="logout-button" @click="googleLogout">ログアウト</button>
    <title-header :price-sum="priceSum" />
    <months-ribbon />
    <button class="add-button" @click="openModal">
      <img src="@/assets/images/button_add.svg" alt="追加" />
    </button>
    <div class="table-container">
      <sutekis-table :sutekis="sutekis" @open-modal="openModal" />
    </div>
    <transition name="modal">
      <form-modal
        v-if="isModalOpen"
        :is-submittable="isSubmittable"
        :date="params.date || ''"
        :text="params.text || ''"
        :price="+params.price"
        @close-modal="closeModal"
        @update-date="updateParams('date', $event)"
        @update-text="updateParams('text', $event)"
        @update-price="updateParams('price', Math.floor($event))"
        @delete-suteki="deleteSuteki"
        @submit="submit"
      />
    </transition>
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

    openModal(suteki) {
      if (suteki) {
        this.updateParams('id', suteki.id)
        this.updateParams('date', suteki.date)
        this.updateParams('text', suteki.text)
        this.updateParams('price', suteki.price)
      }

      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false
    },

    updateParams(fieldName, value) {
      this.$store.commit('suteki/updateParams', { [fieldName]: value })
    },

    deleteSuteki() {
      this.$store.dispatch('suteki/deleteSuteki', this.params.id)
      this.closeModal()
    },

    submit() {
      if (!this.isSubmittable) return

      this.updateParams('userId', this.$store.state.me.id)
      this.$store.dispatch('suteki/addOrUpdateSuteki', this.params)
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
    color: #aaa;
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}

.modal-enter, .modal-leave-to /* .modal-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
