<script setup lang="ts">
import { usePlantesStore } from '@/stores/planetsStore';
import Spinner from '@/components/Spinner.vue'
import PlanetsList from './components/PlanetsList.vue';

const planetsStore = usePlantesStore();

planetsStore.getPlanets()

</script>

<template>
    <main>
        <h1 class="text-4xl font-bold">List of planets sorted by population in a high to low order</h1>
        <PlanetsList v-if="!planetsStore.isFetching" class="my-10" :planets="planetsStore.sortedPlanets" />
        <div v-else class="flex flex-col items-center my-10">
            <Spinner class="mb-5" />
            <span>Loading Planets</span>
        </div>
    </main>
</template>
