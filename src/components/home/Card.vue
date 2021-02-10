<template>
  <a class="cards__item" href="#" target="_blank">
      <div class="cards__image"></div>
      <p class="cards__date"></p>
      <h3 class="cards__title"></h3>
      <p class="cards__text"></p>
      <p class="cards__source"></p>
  </a>
</template>

<script>
export default {

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
</style>