<template>
    <div class="cards"
    >
        <Card 
        v-for="item of cards"
        :item="item"
        :key="item.ix"
        />
    </div>
</template>

<script>
import Card from '@/components/home/Card';

export default {
     props: ['cards'],
     watch: {
                 cards(newCards) {
            localStorage.articles = newCards
        }
     },
/*     data() {
        const cards = JSON.parse(localStorage.articles)
        return {
            cards
        }
    }, */
    
/*     mounted() {
        const articles = localStorage.articles
        if (articles) {
            this.cards = articles
            console.log(this.cards)
        }
    },
    watch: {
        
        cards(newCards) {
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