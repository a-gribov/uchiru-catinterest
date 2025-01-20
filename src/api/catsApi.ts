import axios from 'axios'

const API_URL = 'https://api.thecatapi.com/v1/images/search'
const API_KEY = import.meta.env.VITE_CAT_API_KEY

export const fetchCats = (limit: number, page: number) => {
  return axios.get(API_URL, {
    params: { limit, page },
    headers: {
      'x-api-key': API_KEY, // Передаём ключ в заголовках
    },
  })
}
