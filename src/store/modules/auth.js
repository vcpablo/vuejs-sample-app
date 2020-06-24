import services from '../../services'

const state = {
  user: null,
  token: localStorage.getItem('token')
}
const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  }
}
const actions = {
  authenticate: async function({ commit }, { email, password }) {
    try {
      const { token, user } = await services.auth.authenticate({
        email,
        password
      })
      commit('setToken', token)
      commit('setUser', user)
    } catch (error) {
      console.error(error)
    }
  },
  me: function({ commit }) {
    services.auth
      .me()
      .then(user => commit('setUser', user))
      .catch(error => console.error(error))
  }
}
const getters = {
  isAuthenticated: state => Boolean(state.token)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
