import API from "./API";
import { PlanetsTypes } from "@/types";

export default {
  fetchPlanets: async () => {
    let response: PlanetsTypes.Response | undefined
    let error: Error | undefined;
    try {
      response = await API().get('/planets');
    }
    catch (e) {
      error = e as Error
    }
    const data = response?.data
    return { data, error }
  }
};