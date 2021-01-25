<template>
  <div class="sign-in-page">
    <button @click="googleLogin">Googleでログイン</button>
    {{ isSignedIn }}
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
}
</style>
