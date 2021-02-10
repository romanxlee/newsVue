<template>
      <header class="header">
        <h2 class="header__title">NewsAnalyzer</h2>
        <nav class="header__menu">
            <router-link class="header__link header__link_current" to="/">Главная</router-link>
            <router-link class="header__link" to="/about">О проекте</router-link>
        </nav>
      </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid hsla(0,0%,100%,.2);
}

.header__title {
    margin-top: 30px;
    margin-left: 104px;
    margin-bottom: 26px;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
}

.header__menu {
    display: flex;
    justify-content: space-between;
    gap: 34px;
    margin-right: 101px;
}

.header__link.header__link_current {
    color: #fff;
    border-bottom: 3px solid #fff;
    margin-bottom: -29px;
}
.header__link {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #b6bcbf;
}
</style>