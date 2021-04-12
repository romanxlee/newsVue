<template>
      <header 
      v-bind:class="{ 'header_white' : isAbout }"
      class="header">
        <h2 
        v-bind:class="{ 'header__title_black' : isAbout}"
        class="header__title">NewsFinder</h2>
        <nav class="header__menu">
            <router-link 
            v-bind:class="{ 'header__link_current' : isHome}"
            class="header__link" to="/">Главная</router-link>
            <router-link 
            v-bind:class="{ 'header__link_current header__link_black' : isAbout}"
            class="header__link" to="/about">О проекте</router-link>
        </nav>
      </header>
</template>

<script>
export default {
    props: {
        isHome: {
            type: Boolean
        },
        isAbout: {
            type: Boolean
        }
    }
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

.header.header_white {
    background-color: #fff;
    border-bottom: 1px solid #d1d2d6;
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

@media (max-width: 767px) and (min-width: 320px) {
    .header__title {
        font-size: 16px;
        line-height: 24px;
        margin: 16px;
    }
}

.header__title.header__title_black {
    color: #1a1b22;
}

.header__menu {
    display: flex;
    justify-content: space-between;
    gap: 34px;
    margin-right: 101px;
}

@media (max-width: 767px) and (min-width: 320px) {
    .header__menu {
        margin-right: 14px;
        gap: 11px;
    }
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

@media (max-width: 767px) and (min-width: 320px) {
    .header__link {
        font-size: 16px;
        line-height: 24px;
    }
}

.header__link.header__link_current {
    color: #fff;
    border-bottom: 3px solid #fff;
    margin-bottom: -29px;
}

.header__link.header__link_black {
    color: #000;
    border-color: #000;
}
</style>