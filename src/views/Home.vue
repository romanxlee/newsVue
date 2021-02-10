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
import Background from '@/components/home/Background';
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Author from '@/components/Author'
import Results from '@/components/home/Results'

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