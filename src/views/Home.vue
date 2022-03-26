<template>
    <div class="page">
        <Background />
        <Content >
            <Results />
            <Author />
        </Content>
        <Footer />
    </div>
</template>

<script>
import Background from '@/components/home/Background.vue';
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
import Author from '@/components/Author.vue'
import Results from '@/components/home/Results.vue'

export default {
    components: {
        Background,
        Content,
        Results,
        Footer,
        Author
    }
}
</script>