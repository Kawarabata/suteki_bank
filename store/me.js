import firebase from '@/plugins/firebase'

export const state = () => ({
  isSignedIn: false,
  id: '',
  name: '',
  imageUrl: '',
})

// export const getters = {
//   imageUrl(state) {
//     return state.currentUser.photoURL
//   },

//   name(state) {
//     return state.currentUser.displayName
//   },
// }

export const mutations = {
  setId(state, id) {
    state.id = id
  },

  setName(state, name) {
    state.name = name
  },

  setImageUrl(state, imageUrl) {
    state.imageUrl = imageUrl
  },

  setIsSignedIn(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  },
}

export const actions = {
  async signIn({ state }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
      await firebase
        .firestore()
        .collection('users')
        .doc(state.id)
        .set({ name: state.name })
    } catch (error) {
      console.error(error)
    }
  },

  async signOut() {
    await firebase.auth().signOut()
  },

  setUserDataFromGoogle(context, user) {
    context.commit('setIsSignedIn', true)
    context.commit('setId', user.uid)
    context.commit('setName', user.displayName)
    context.commit('setImageUrl', user.photoUrl)
  },
}
