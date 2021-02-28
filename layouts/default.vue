<template>
  <Nuxt />
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  mounted() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await this.$store.dispatch('me/setUserDataFromGoogle', user)

        if (this.$route.path !== '/') {
          this.$router.push('/')
        }
        await this.$store.dispatch('suteki/fetchSutekis')
      } else {
        await this.$store.commit('me/setIsSignedIn', false)

        if (this.$route.path !== '/login') {
          this.$router.push('/login')
        }
      }
    })
  },
}
</script>

<style>
html {
  font-family: serif;
  font-size: 16px;
  color: #202124;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: inherit;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
</style>
