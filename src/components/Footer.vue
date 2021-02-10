<template>
    <footer class="footer">
      <p class="footer__copyright">© 2020 romanxlee</p>
      <nav class="footer__menu">
        <a class="footer__link" href="index.html">Главная</a>
        <a class="footer__link" href="about.html">О проекте</a>
        <a class="footer__link" href="https://praktikum.yandex.ru/" target="blank">Яндекс.Практикум</a>
    </nav>
    <div class="footer__social">
        <a class="footer__social-link" href="https://github.com/romanxlee" target="blank">
            <img class="footer__social-logo" src="../assets/github.svg" alt="Github">
        </a>
        <a class="footer__social-link" href="https://www.facebook.com/" target="blank">
            <img class="footer__social-logo" src="../assets/fb.svg" alt="Facebook">
        </a>
      </div>
    </footer>
</template>

<script>
export default {

}
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

.footer__copyright {
    margin: 0 0 0 104px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #b6bcbf;
}

.footer__menu {
    width: 406px;
    display: flex;
    justify-content: space-between;
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

.footer__social {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-right: 104px;
}

.footer__social-link {
    text-decoration: none;
}
</style>