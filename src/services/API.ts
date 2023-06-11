import axios from "axios";
import { PlanetsTypes } from "@/types";

export default (url: string = PlanetsTypes.baseUrl) => {
  return axios.create({
    baseURL: url
  })
}