<template>
    <footer class="footer">
      <p class="footer__copyright">© 2022 romanxlee</p>
      <nav class="footer__menu">
        <router-link class="footer__link" to="/">Главная</router-link>
        <router-link class="footer__link" to="/about">О проекте</router-link>
    </nav>
    <div class="footer__social">
        <a class="footer__social-link" href="https://github.com/romanxlee" target="blank">
            <img class="footer__social-logo" src="../assets/github.svg" alt="Github">
        </a>
      </div>
    </footer>
</template>

<script setup>
</script>

<style>
.footer {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px 0 28px;
    background-color: #fff;
}

@media (max-width: 767px) and (min-width: 320px) {
    .footer {
        flex-wrap: wrap;
    }
}

.footer__copyright {
    margin: 0 0 0 104px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #b6bcbf;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .footer__copyright {
        margin-left: 40px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .footer__copyright {
        margin-left: 16px;
        margin-top: 40px;
        order: 3;
    }
}

.footer__menu {
    width: 406px;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .footer__menu {
        width: 360px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .footer__menu {
        max-width: 184px;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 16px;
    }
}

.footer__link {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #1a1b22;
}

@media (max-width: 767px) and (min-width: 320px) {
    .footer__link {
        line-height: 48px;
    }
}

.footer__social {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-right: 104px;
}

@media (max-width: 1439px) and (min-width: 768px) {
    .footer__social {
        margin-right: 40px;
    }
}

@media (max-width: 767px) and (min-width: 320px) {
    .footer__social {
        margin-right: 18px;
        justify-content: flex-end;
    }
}

.footer__social-link {
    text-decoration: none;
}
</style>