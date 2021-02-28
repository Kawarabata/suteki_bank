<template>
  <div class="sign-in-page">
    <button @click="googleLogin">Googleでログイン</button>
  </div>
</template>

<script>
export default {
  computed: {
    isSignedIn() {
      return this.$store.state.me.isSignedIn
    },
  },
  methods: {
    googleLogin() {
      this.$store.dispatch('me/signIn')
    },
  },
}
</script>

<style scoped lang="postcss">
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;

  & button {
    padding: 12px;
    background-color: #c4d700;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
