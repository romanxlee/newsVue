<template>
  <div class="page">
      <Header />
      <Content>
          <Clients />
          <Techs />
          <Author />
      </Content>
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Clients from '@/components/about/Clients'
import Techs from '@/components/about/Techs'
import Author from '@/components/Author'
import Footer from '@/components/Footer'

export default {
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