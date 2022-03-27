<template>
        <section class="search">
        <form 
        @submit.prevent="onSubmit"
        class="search__form">
            <h1 class="search__title">Что в мире творится?</h1>
            <p class="search__text">Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.</p>
            <div class="search__field">
                <input 
                v-model="request"
                class="search__input" type="text" placeholder="Введите тему новости" minlength="2" maxlength="30" required>
                <button class="search__button">Искать</button>
            </div>
        </form>
      </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from "../../store";
const store = useStore()

const request = ref('')

const setCards = (news) => {
  store.setCards(news)
}

const searchNews = () => {
  store.toggleSearch()
  const key = '&apiKey=dd4fcad612854992bf99fc67d8617096'
  const TODAY = new Date()
  const DAYS_IN_WEEK = 7;
  const MS_IN_DAY = 86400000;
  const DAYS_AGO = DAYS_IN_WEEK * MS_IN_DAY;
  const DAYS_FROM_TODAY = TODAY - DAYS_AGO;
  return fetch('https://nomoreparties.co/news/v2/everything?' + `q=${request.value}` + `&from=${TODAY}` + `&to=${DAYS_FROM_TODAY}` +`&sortBy=publishedAt` + `&language=ru` + `&pageSize=100` + key, {
    method: 'GET'
  })
      .then((res) => res.json())
      .then((res) => setCards(res.articles))
      //.finally(store.toggleSearch())
      .catch(err => console.log(err))
}

const onSubmit = async () => {
  await searchNews()
  store.toggleSearch()
}
</script>

<style>
.search {
    max-width: 1440px;
    padding-top: 80px;
    padding-bottom: 80px;
}

@media (max-width: 767px) and (min-width: 320px) {
    .search {
        padding-bottom: 32px;
    }
}

.search__form {
    max-width: 608px;
    margin: 0 auto;
}

.search__title {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 64px;
    color: #fff;
    margin: 0 auto;
    max-width: 608px;
}

@media (max-width: 767px) and (min-width: 320px) {
    .search__title {
        font-size: 36px;
        line-height: 40px;
        margin-left: 19px;
    }
}

.search__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    max-width: 545px;
    margin: 32px 0 64px;
}

@media (max-width: 767px) and (min-width: 320px) {
    .search__text {
        font-size: 20px;
        line-height: 26px;
        margin-left: 16px;
        max-width: 288px;
    }
}

.search__field {
    margin: 0 auto;
    text-align: center;
    position: relative;
}

.search__input {
    width: 608px;
    height: 64px;
    background: #fff;
    border: 1px solid #d1d2d6;
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    border-radius: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #b6bcbf;
    padding: 21px 0 21px 24px;
    outline: none;
}

@media (max-width: 767px) and (min-width: 320px) {
    .search__input {
        width: 288px;
    }
}

.search__button {
    position: absolute;
    background: #2f71e5;
    box-shadow: 0 5px 15px rgba(14,26,57,.2);
    border-radius: 100px;
    border-style: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    color: #fff;
    right: 0;
    width: 168px;
    height: 64px;
    outline: none;
    cursor: pointer;
}

.search__button:hover {
    opacity: 0.9;
}

@media (max-width: 767px) and (min-width: 320px) {
    .search__button {
        position: relative;
        margin-top: 16px;
        width: 288px;
    }
}
</style>