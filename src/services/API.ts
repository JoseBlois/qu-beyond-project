import axios from "axios";

export default (url: string = import.meta.env.VITE_SWAPI_BASE_URL) => {
  return axios.create({
    baseURL: url
  })
}