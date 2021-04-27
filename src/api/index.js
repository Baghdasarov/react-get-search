import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com';

export const searchQuery = (value) => {
  return axios.get(`search/users?q=${value}%20in:login`)
}