// type Suteki = {
//   text: string
//   date: Date
// }
export const state = () => ({
  sutekis: [],
})

export const mutations = {
  addSuteki(state, suteki) {
    state.sutekis = [...state.sutekis, suteki]
  },
}

export const actions = {
  addSuteki(context, suteki) {
    context.commit('addSuteki', suteki)
    localStorage.setItem('sutekis', JSON.stringify(state.sutekis))
  },
  setSutekis(context) {
    const sutekis = localStorage.getItem('sutekis')
      ? JSON.parse(localStorage.getItem('sutekis'))
      : []
    context.commit('setSutekis', sutekis)
  },
}
