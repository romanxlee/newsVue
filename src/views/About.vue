<template>
  <div class="page">
      <Header 
      v-bind:isAbout="isAbout"/>
      <Content>
          <Clients />
          <Techs />
          <Author />
      </Content>
      <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Clients from '@/components/about/Clients.vue'
import Techs from '@/components/about/Techs.vue'
import Author from '@/components/Author.vue'
import Footer from '@/components/Footer.vue'

const isAbout = ref(true)
</script>

<style>

</style>