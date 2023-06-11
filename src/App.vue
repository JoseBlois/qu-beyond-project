<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PlanetsAPI from '@/services/PlanetsAPI';
import type { PlanetsResponse, Planet } from "@/types";

const response = ref<PlanetsResponse | null>(null)

onMounted(async () => {
    response.value = await PlanetsAPI.fetchPlanets();
})

</script>

<template>
    <div>
        <div v-if="response">
            <div v-for="planet in response.results">
                <span>{{ planet.name }} - {{ planet.population }}</span>
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<style scoped></style>
