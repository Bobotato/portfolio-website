import axios from 'axios'

export const apiClient = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    timeout: 1000
  }
})
