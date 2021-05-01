import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8001',
  baseURL: 'http://13.229.72.244:8001'
})

export default instance
