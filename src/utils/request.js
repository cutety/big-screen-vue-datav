import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 3,
})

service.interceptors.request.use(function (config) {
  // Do something before request is sent
  // Object.assign(config.headers, {'Authorization': `Bearer ${storageService.get(storageService.USER_TOKEN)}` })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default service
