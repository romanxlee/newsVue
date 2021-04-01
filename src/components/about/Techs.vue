<template>
    <section class="tech">
        <h2 class="tech__title section-title">Используемые технологии</h2>
        <div class="tech__container">
            <div class="tech__item">
                <p class="tech__text">Vue</p>
                <img class="tech__image" src="../../assets/logo.png" alt="Vue logo">
            </div>
            <div class="tech__item">
                <p class="tech__text">VueX</p>
                <img class="tech__image" src="../../assets/vuex.png" alt="VueX logo">
            </div>
            <div class="tech__item">
                <p class="tech__text">Vue Router</p>
                <img class="tech__image" src="../../assets/router.png" alt="Router logo">
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.tech {
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 80px;
    padding-left: 104px;
    padding-bottom: 88px;
}

.tech__title {
    max-width: 344px;
    margin: 0;
}

.tech__container {
    margin-left: 178px;
    margin-top: 13px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
}

.tech__item {
    display: flex;
    flex-direction: column;
}

.tech__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: .2px;
    color: #1a1b22;
}


</style>