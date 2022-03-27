<template>
    <section class="tech">
        <h2 class="tech__title section-title">Используемые технологии</h2>
        <div class="tech__container">
            <div v-for="item in LOGOS" :key="item.name" class="tech__item">
                <p class="tech__text">{{ item.name}}</p>
                <img class="tech__image" :src=item.logo :alt=item.alt>
            </div>
        </div>
    </section>
</template>

<script setup>
import vueLogo from '../../assets/logo.png'
import viteLogo from '../../assets/vite.svg'
import piniaLogo from '../../assets/pinia.svg'
const LOGOS = [
  {
    name: 'Vue',
    logo: vueLogo,
    alt: 'Vue logo'
  },
  {
    name: 'Vite',
    logo: viteLogo,
    alt: 'Vite logo'
  },
  {
    name: 'Pinia',
    logo: piniaLogo,
    alt: 'Pinia logo'
  }
]
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

.tech__image {
  width: 200px;
  height: 200px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .tech {
        padding: 40px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .tech {
      padding: 32px 16px;
      justify-content: center;
    }
}

@media (max-width: 1439px) and (min-width: 768px) {
    .tech__container {
        margin-left: 0;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .tech__container {
        grid-template-columns: 1fr;
        margin-left: 0;
        grid-gap: 33px;
    }
}
</style>