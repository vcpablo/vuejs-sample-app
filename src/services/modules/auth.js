import apiInstance from '../api'

export default {
  async authenticate({ email, password }) {
    // setTimeout(() => return )
    return await apiInstance.post('/authenticate', { email, password })
  },
  async me() {
    return await apiInstance.get('/me')
  }
}
