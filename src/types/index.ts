export type PlanetsResponse = {
  results: Planet[],
  count: number,
  next: string,
  previous: string
}

export type Planet = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string
}