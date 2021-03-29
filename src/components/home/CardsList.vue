<template>
    <div class="cards"
    >
        <Card 
        v-for="item of renderCards"
        :item="item"
        :key="item.ix"
        />
    </div>
</template>

<script>
import Card from '@/components/home/Card';

export default {
     props: ['renderCards'],
/*     data() {
        const cards = JSON.parse(localStorage.articles)
        return {
            cards
        }
    }, */
    
/*     mounted() {
        //const articles = localStorage.articles
        if (localStorage.articles) {
            this.newCards = localStorage.articles
        }
    },
    watch: {
        
        newCards(newCards) {
            localStorage.articles = newCards
        }
    }, */
    components: {
        Card
    }
}
</script>

<style>
.cards {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 16px;
    margin: 64px 104px;
}
</style>