<template>
  <div class="home">
    <button @click="googleLogout">ログアウト</button>
    <title-header />
    <months-ribbon />
    <button class="add-button" @click="openModal">
      <img src="@/assets/images/button_add.svg" alt="追加" />
    </button>
    <form-modal v-if="isModalOpen" @close-modal="closeModal" />
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
  },
}
</script>

<style scoped lang="postcss">
.home {
  margin: 0 auto;
  min-height: 100vh;

  & .add-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
}
</style>
