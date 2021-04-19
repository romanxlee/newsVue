<template>
        <section class="author">
            <picture>
                <source srcset="../assets/ava.jpg" media="(max-width: 100%)">
                <img class="author__avatar" src="../assets/ava.jpg" alt="Автор проекта">
            </picture>

            <div class="author__container">
                  <h2 class="section-title">Об авторе</h2>
                  <p class="section-text">Привет! Меня зовут Роман, я начинающий frontend-разработчик.</p>
                  <p class="section-text">Имею навыки адаптивной и семантической верстки по макетам из Figma, работы с Git и Webpack, программирования на "чистом" JavaScript и с помощью фреймворка Vue и его экосистемы</p>
                  <p class="section-text">Данный проект является дипломной работой в курсе Яндекс.Практикума по профессии "Frontend-разработчик", переписанный мной на Vue. В нем реализованы асинхронные запросы к API, адаптивная верстка, используется vue-router и Vuex.</p>
            </div>
      </section>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 1439px) and (min-width: 768px) {
    .author {
        padding: 40px 40px 48px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .author {
        flex-direction: column;
        padding: 32px 16px;
        align-items: center;
    }
}

.author {
    max-width: 1440px;
    background-color: #fff;
    padding: 80px 104px;
    display: flex;
    justify-content: space-between;
    gap: 56px;
}

.author__avatar {
    width: 100%;
    border-radius: 50%;
    align-self: center;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .author__avatar {
        width: 232px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .author__avatar {
        width: 272px;
    }
}

.author__container {
    max-width: 600px;
    padding-top: 51px;
    margin-right: 216px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .author__container {
        padding-top: 0;
        margin-right: 40px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .author__container {
        margin: 0;
        padding-top: 16px;
    }
}

.section-title {
    margin: 0;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    color: #1a1b22;
}

.section-link, .section-text {
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    color: #1a1b22;
}
.section-text {
    margin: 30px 0;
    font-weight: 400;
}
</style>