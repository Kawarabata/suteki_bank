// import { databaseRepository } from '@/repository'
import firebase from '@/plugins/firebase'

// type Suteki = {
//   text: string
//   price: number
//   userId string
//   date: Date
// }

export const state = () => ({
  sutekis: [],
  params: {
    text: '',
    price: 0,
    userId: '',
    date: '',
  },
})

export const mutations = {
  setSutekis(state, sutekis) {
    state.sutekis = sutekis
  },

  addSuteki(state, suteki) {
    state.sutekis = [...state.sutekis, suteki]
  },

  updateParams(state, payload) {
    state.params = { ...state.params, ...payload }
  },

  resetParams(state) {
    state.params = {
      text: '',
      price: 0,
      date: '',
    }
  },
}

export const actions = {
  async addSuteki({ state, commit, dispatch }) {
    try {
      await firebase.firestore().collection('sutekis').add(state.params)
      commit('resetParams')
      await dispatch('fetchSutekis')
      console.log('完了')
    } catch (error) {
      console.error(error)
      return {
        error: { message: error.message },
      }
    }
  },

  async fetchSutekis({ rootState, commit }) {
    try {
      const response = await firebase
        .firestore()
        .collection('sutekis')
        .where('userId', '==', rootState.me.id)
        .orderBy('date')
        .get()
      const sutekis = response.docs.map((doc) => doc.data())
      commit('setSutekis', sutekis)
    } catch (error) {
      console.error(error)
      return {
        error: { message: error.message },
      }
    }
  },
}
