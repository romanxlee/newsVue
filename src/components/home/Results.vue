<template>
    <section 
    class="results">
        <Preloader />
        <Nothing />
        <Success 
        />
    </section>
</template>

<script>
import Preloader from '@/components/home/Preloader';
import Nothing from '@/components/home/Nothing';
import Success from '@/components/home/Success'

export default {
    components: {
        Preloader,
        Nothing,
        Success
    },
    methods: {
    }
}
</script>

<style>
.results {
    background-color: #f5f6f7;
}

.results__title {
    margin: 0 0 16px;
    font-family: Roboto Slab;
    font-size: 26px;
    line-height: 30px;
    color: #1a1b22;
}

.results__text {
    max-width: 300px;
    margin: 0 0 80px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 24px;
    color: #b6bcbf;
}

.results__image {
    margin-top: 80px;
    margin-bottom: 24px;
}
</style>