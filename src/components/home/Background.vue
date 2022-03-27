<template>
  <div class="background">
    <Header 
    v-bind:isHome="isHome"/>
    <Search />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue';
import Search from '@/components/home/Search.vue'

const isHome = ref(true)
</script>

<style>
.background {
    background-image: url('../../assets/background.png');
    background-size: cover;
    background-position: 50%;
    max-width: 1440px;
    margin: 0 auto;
}
</style>