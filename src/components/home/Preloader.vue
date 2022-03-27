<template>
    <div
        v-if="store.isSearching"
    class="results__preloader">
        <i class="circle-preloader"></i>
        <p class="results__text">Идет поиск новостей...</p>
    </div>
</template>

<script setup>
import { useStore } from "../../store";
const store = useStore()
</script>

<style>
.results__preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
}

.circle-preloader {
    display: block;
    width: 50px;
    height: 50px;
    border: 4px solid;
    border-color: #444 #444 #888;
    border-radius: 50%;
    margin-bottom: 24px;
    animation: spin .75s linear infinite;
}
</style>