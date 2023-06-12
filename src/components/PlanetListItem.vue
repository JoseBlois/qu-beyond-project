<script setup lang="ts">
import { PlanetsTypes } from '@/types';

const props = defineProps<{
  planet: PlanetsTypes.Planet
}>()

</script>

<template>
  <li class="flex hover:bg-violet-600 hover:text-white cursor-pointer p-4 space-x-4">
    <span>Name: {{ planet.name }}</span>
    <span>Population: {{ planet.population }}</span>
    <span>Surface Water: {{ planet.surface_water }}</span>
    <span>Diameter: {{ planet.diameter }}</span>
  </li>
</template>

<style scoped>
span {
  width: 20%;
}
</style>