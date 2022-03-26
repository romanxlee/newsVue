<template>
    <div 
    v-if="!renderCards.length"
    class="results__nothing">
        <img class="results__image" src="../../assets/nothing.svg" alt="Ничего не найдено">
        <h3 class="results__title">Ничего не найдено</h3>
        <p class="results__text">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from "../../store";
const store = useStore()
const renderCards = computed(() => store.cardsToRender)
</script>

<style>
.results__nothing {
    display: none;
    flex-direction: column;
    align-items: center;
}
</style>