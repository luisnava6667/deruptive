import axios from 'axios'

const ApiCripto = axios.create({
  baseURL: 'https://data.messari.io/api/v1',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-messari-api-key': import.meta.env.VITE_API_KEY
  }
})
export default ApiCripto
