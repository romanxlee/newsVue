<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  width: 100%;
  margin: 0 auto;
  background-color: #e5e5e5;
}

.section-title {
    margin: 0;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    color: #1a1b22;
}

.section-text {
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    color: #1a1b22;
    margin: 30px 0;
    font-weight: 400;
}


@font-face {
  font-family: 'Roboto Slab';
  font-style:  normal;
  font-weight: 400;
  src: url("./fonts/robotoslab-regular.woff") format("woff");
}


@font-face {
  font-family: 'Roboto';
  font-style:  normal;
  font-weight: 400;
  src: url("./fonts/roboto-regular.woff") format("woff");
}

@font-face {
  font-family: 'Roboto';
  font-style:  normal;
  font-weight: 500;
  src: url("./fonts/roboto-medium.woff") format("woff");
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style:  normal;
  font-weight: 400;
  src: url("./fonts/sourcesanspro-regular.woff") format("woff");
}
</style>
