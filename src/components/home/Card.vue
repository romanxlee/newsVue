<template>
  <a class="cards__item" 
  v-bind:href= item.url
  target="_blank">
      <div class="cards__image"
      v-bind:style="{backgroundImage: 'url(' + item.urlToImage + ')'}"></div>
      <p class="cards__date">{{ item.date }}</p>
      <h3 class="cards__title">{{ item.title }}</h3>
      <p class="cards__text">{{ item.description }}</p>
      <p class="cards__source">{{ item.source.name }}</p>
  </a>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style>

.cards__item {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: #fff;
    margin-bottom: 16px;
    overflow: hidden;
    text-decoration: none;
}

.cards__image {
    max-width: 400px;
    height: 272px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards__image {
        height: 150px;
    }
}

.cards__date {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #b6bcbf;
    margin-left: 24px;
    margin-top: 20px;
    margin-bottom: 12px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards__date {
        margin-top: 16px;
        margin-left: 16px;
    }
}

.cards__title {
    max-width: 352px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #1a1b22;
    margin-left: 24px;
    margin-top: 0;
    margin-bottom: 0;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards__title {
        font-size: 22px;
        line-height: 24px;
        margin-left: 16px;
        max-width: 192px;
    }
}

.cards__text {
    max-width: 352px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1a1b22;
    margin-left: 24px;
    margin-top: 16px;
    margin-bottom: 10px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards__text {
        height: 88px;
        overflow: hidden;
        margin-top: 10px;
        margin-left: 16px;
    }
}

.cards__source {
    text-decoration: none;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: .4px;
    text-transform: uppercase;
    color: #b6bcbf;
    margin-left: 24px;
    margin-bottom: 24px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .cards__source {
        margin-left: 16px;
        margin-bottom: 16px;
    }
}
</style>