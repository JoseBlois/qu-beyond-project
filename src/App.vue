<script setup lang="ts">
import { usePlantesStore } from '@/stores/planetsStore';

const planetsStore = usePlantesStore();

planetsStore.getPlanets()


</script>

<template>
    <div>
        <div>{{ planetsStore.isFetching ? 'PENDING' : 'DONE' }}</div>
        <div v-if="!planetsStore.isFetching">
            <div v-for="planet in planetsStore.sortedPlanets">
                <span>{{ planet }}</span>
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<style scoped></style>
