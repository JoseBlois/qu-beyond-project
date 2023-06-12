<script setup lang="ts">
import { PlanetsTypes } from '@/types';
import PlanetListItem from './PlanetListItem.vue';

const props = defineProps<{
  planets: PlanetsTypes.Planet[]
}>()

</script>

<template>
  <ul>
    <PlanetListItem v-for="planet in props.planets" :planet="planet" />
  </ul>
</template>