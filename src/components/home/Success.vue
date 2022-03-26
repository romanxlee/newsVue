<template>
    <div 
    v-if="renderCards.length"
    class="results__success">
        <div class="results__head">
            <h2 class="section-title">Результаты поиска</h2>
        </div>
        
        <CardsList 
        v-bind:renderCards="renderCards"
        />

        <button
        @click.prevent="loadMore"
        class="results__button">Показать еще</button>
    </div>
</template>

<script>
import CardsList from '@/components/home/CardsList.vue';

export default {
    computed: {
        renderCards() {
            return this.$store.getters.filteredCards
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        loadMore() {
            this.$store.commit('incrementNewsCounter')
        }
    },
    components: {
        CardsList
    }
}
</script>

<style>
.results__success {
    display: flex;
    flex-direction: column;
}

.results__head {
    display: flex;
    justify-content: space-between;
    margin: 76px 104px 0;
}

@media (max-width: 767px) and (min-width: 320px) {
    .results__head {
        flex-direction: column;
        margin: 32px 16px 0;
    }
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

.section-link {
    text-decoration: none;
    font-weight: 500;
    align-self: center;
}

.results__button {
    background: #fff;
    border-radius: 80px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    align-self: center;
    color: #1a1b22;
    padding: 18.14px 84px 21.86px;
    width: 288px;
    border-style: none;
    margin-bottom: 80px;
    outline: none;
    cursor: pointer;
    transition: box-shadow .3s;
}

.results__button:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

@media (max-width: 1439px) and (min-width: 768px) {
    .results__button {
        width: 240px;
        padding: 15px 60px;
    }
}
</style>