import axios from 'axios'

const API_URL = 'https://api.thecatapi.com/v1/images/search'

export const fetchCats = (limit: number, page: number) => {
  return axios.get(API_URL, {
    params: { limit, page },
  })
}
