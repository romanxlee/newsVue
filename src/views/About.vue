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

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Clients from '@/components/about/Clients.vue'
import Techs from '@/components/about/Techs.vue'
import Author from '@/components/Author.vue'
import Footer from '@/components/Footer.vue'

export default {
    data() {
        return {
            isAbout: true
        }
    },
    components: {
        Header,
        Content,
        Clients,
        Techs,
        Author,
        Footer
    }
}
</script>

<style>

</style>