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

<script setup>
import Card from '@/components/home/Card.vue';

const props = defineProps({
  renderCards: {
    type: Array
  }
})
</script>

<style>
.cards {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 16px;
    margin: 64px 104px 64px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards {
        margin: 40px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .cards {
        margin: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>