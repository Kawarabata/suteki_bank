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

  updateParams(state, payload) {
    state.params = { ...state.params, ...payload }
  },

  resetParams(state) {
    state.params = {
      id: '',
      text: '',
      price: 0,
      date: '',
    }
  },
}

export const actions = {
  async addOrUpdateSuteki({ dispatch }, params) {
    if (params.id) {
      await dispatch('updateSuteki', params)
    } else {
      await dispatch('addSuteki', params)
    }
  },

  async addSuteki({ commit, dispatch }, params) {
    try {
      await firebase.firestore().collection('sutekis').add({
        date: params.date,
        text: params.text,
        price: params.price,
        userId: params.userId,
      })
      commit('resetParams')
      await dispatch('fetchSutekis')
    } catch (error) {
      console.error(error)
    }
  },

  async updateSuteki({ commit, dispatch }, params) {
    try {
      await firebase.firestore().collection('sutekis').doc(params.id).update({
        date: params.date,
        text: params.text,
        price: params.price,
      })
      commit('resetParams')
      await dispatch('fetchSutekis')
    } catch (error) {
      console.error(error)
    }
  },

  async deleteSuteki({ state, commit, dispatch }, id) {
    try {
      if (id) {
        await firebase.firestore().collection('sutekis').doc(id).delete()
      }
      await dispatch('fetchSutekis')
    } catch (error) {
      console.error(error)
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
      const sutekis = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      commit('setSutekis', sutekis)
    } catch (error) {
      console.error(error)
    }
  },
}
