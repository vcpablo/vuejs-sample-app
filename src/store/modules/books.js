import services from '../../services'

const state = {
  loading: false,
  error: null,
  data: null
}

const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  },
  setData(state, books) {
    state.data = books
  }
}
const actions = {
  fetchBooks: async function({ commit }) {
    commit('setLoading', true)
    try {
      const books = await services.books.get()
      commit('setData', books)
    } catch (error) {
      commit('setError', error)
    } finally {
      commit('setLoading', false)
    }
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
