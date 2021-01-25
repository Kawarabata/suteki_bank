import firebase from 'firebase'

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
  async signIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      return {
        error: { message: error.message },
      }
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

  // async checkSignedIn() {
  //   console.log('aa')
  //   const result = await new Promise((resolve, reject) => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       resolve({ data: user != null })
  //     })
  //   })
  //   console.log(result)
  //   this.context.commit('setIsSignedIn', result.data)
  // },
}
