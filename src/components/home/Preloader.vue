<template>
    <div class="results__preloader">
        <i class="circle-preloader"></i>
        <p class="results__text">Идет поиск новостей...</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.results__preloader {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
}

.circle-preloader {
    display: block;
    width: 50px;
    height: 50px;
    border: 4px solid;
    border-color: #444 #444 #888;
    border-radius: 50%;
    margin-bottom: 24px;
    animation: spin .75s linear infinite;
}
</style>