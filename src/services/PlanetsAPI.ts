import API from "./API";
import type { PlanetsResponse } from "@/types";

export default {
  fetchPlanets: async () => {
    const response: PlanetsResponse = (await API().get('/planets')).data;
    return response
  }
};