// import apiInstance from '../api'

const books = [
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

const delay = callback => {
  setTimeout(() => {
    callback()
  }, 2000)
}

export default {
  async get() {
    return await new Promise(resolve => delay(() => resolve(books)))
  },
  async getById(id) {
    return await new Promise(resolve =>
      delay(() => resolve(books.find(book => book.id === id)))
    )
  }
}
