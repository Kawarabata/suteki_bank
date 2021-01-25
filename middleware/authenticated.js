import firebase from 'firebase'

export default function ({ route, store, redirect }) {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      await store.dispatch('me/setUserDataFromGoogle', user)

      if (route.path !== '/') {
        redirect('/')
      }
    } else {
      await store.commit('me/setIsSignedIn', false)

      if (route.path !== '/login') {
        redirect('/login')
      }
    }
  })
}
