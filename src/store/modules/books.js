const mockedBooks = [
  {
    id: 1,
    title: 'Tokyo',
    author: 'Mo Hayder'
  },
  {
    id: 2,
    title: 'The Lost Symbol',
    author: 'Dan Brown'
  },
  {
    id: 3,
    title: 'And Then There Were None',
    author: 'Agatha Christie'
  }
]

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: []
}

export default {
  namespaced: true,
  state: {
    search: '',
    books: INITIAL_STATE
  },
  mutations: {
    setLoading(state, loading) {
      state.books.loading = loading
    },
    setError(state, error) {
      state.books.error = error
    },
    setData(state, books) {
      state.books.data = books
    },
    setSearch(state, search) {
      console.log(search)
      state.search = search
    },
    reset(state) {
      state.books = INITIAL_STATE
    }
  },
  actions: {
    async fetchBooks({ commit }) {
      commit('reset')
      commit('setLoading', true)
      try {
        const books = await new Promise(resolve =>
          setTimeout(() => resolve(mockedBooks), 2000)
        )
        commit('setData', books)
      } catch (error) {
        commit('setData', [])
        commit('setError', error)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  getters: {
    totalBooks: state => state.books.length,
    filteredBooks: state => {
      if (state.search) {
        return state.books.data.filter(book =>
          Object.values(book).some(value =>
            String(value)
              .toLowerCase()
              .includes(state.search.toLowerCase())
          )
        )
      }

      return state.books.data
    }
  }
}
