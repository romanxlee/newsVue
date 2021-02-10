<template>
        <section class="search">
        <form class="search__form">
          <h1 class="search__title">Что в мире творится?</h1>
          <p class="search__text">Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.</p>
          <div class="search__field">
            <input class="search__input" type="text" placeholder="Введите тему новости" minlength="2" maxlength="30" required>
            <button class="search__button">Искать</button>
          </div>
        </form>
      </section>
</template>

<script>
export default {

}
</script>

<style>
.search {
    max-width: 1440px;
    padding-top: 80px;
    padding-bottom: 80px;
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
}
</style>