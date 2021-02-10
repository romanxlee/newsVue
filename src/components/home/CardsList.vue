<template>
    <div class="cards">
        <Card />
    </div>
</template>

<script>
import Card from '@/components/home/Card';

export default {
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