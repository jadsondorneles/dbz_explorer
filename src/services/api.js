import axios from "axios"

const api = axios.create({
  baseURL: 'https://dragon-ball-api.herokuapp.com',
})

export default api