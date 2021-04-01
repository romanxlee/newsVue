<template>
  <div class="background">
    <Header 
    v-bind:isHome="isHome"/>
    <Search />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Search from '@/components/home/Search'

export default {
  data() {
    return {
      isHome: true
    }
  },
  components: {
    Header,
    Search
  }
}
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