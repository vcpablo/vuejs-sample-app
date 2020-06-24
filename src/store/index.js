import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import auth from './modules/auth'
import books from './modules/books'

Vue.use(Vuex)

const VuexPersistPlugin = new VuexPersist({
  storage: window.localStorage,
  reducer: state => ({ auth: state.auth })
})

export default new Vuex.Store({
  modules: {
    auth,
    books
  },
  plugins: [VuexPersistPlugin.plugin]
})
