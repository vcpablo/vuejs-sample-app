import axios from 'axios'
import store from '../store'

const axiosInstance = axios.create({
  baseURL: window.__API_URL,
  timeout: 10000
})

axiosInstance.interceptors.request.use(config => {
  const token = store.state.auth.token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error)

    if (error.response.status === 401) {
      store.dispatch('auth/showUnauthenticatedAlert')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
