import { defineStore } from 'pinia'
import PlanetsAPI from '@/services/PlanetsAPI';
import type { PlanetsTypes } from '@/types';

export namespace PlanetStore {
  export type state = {
    planets: PlanetsTypes.Planet[],
    isFetching: boolean,
    error: boolean
  }
}

export const usePlantesStore = defineStore('planets', {
  state: (): PlanetStore.state => {
    return {
      planets: [],
      isFetching: false,
      error: false
    }
  },

  actions: {
    setPlanets(planets: PlanetsTypes.Planet[] | undefined) {
      this.planets = planets || [];
    },
    async getPlanets() {
      this.isFetching = true;
      const { data, error } = await PlanetsAPI.fetchPlanets();
      this.isFetching = false;
      if (error) {
        this.error = !!error
        return
      }
      this.planets = !!data ? data?.results : [];
    }
  },
  getters: {
    sortedPlanets(): PlanetsTypes.Planet[] {
      return this.planets.sort((a, b) => {
        return parseInt(a.population) > parseInt(b.population) ? -1 : 1
      })
    }
  }
})