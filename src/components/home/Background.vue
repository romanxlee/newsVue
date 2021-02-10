<template>
  <div class="background">
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Search from '@/components/home/Search'

export default {
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