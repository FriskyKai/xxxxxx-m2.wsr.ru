<script>
  import {ref} from "vue";

  export default {
    setup() {
      let isAuth = ref(false)

      return {
        isAuth
      }
    }
  }
</script>

<template>
  <nav>
    <figure>
      <img class="logo" src="../assets/images/logo.png" alt="Логотип сайта">
    </figure>
    <RouterLink to="/register">Регистрация</RouterLink>
    <RouterLink to="/authorization">Авторизация</RouterLink>
    <RouterLink to="/files">Мои файлы</RouterLink>
    <RouterLink to="/available-files">Доступные файлы</RouterLink>
    <RouterLink to="/register">Выход из системы</RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,128,0,1) 0%, rgba(0,195,193,1) 100%);
    border: 2px solid;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  a {
    border: 1px solid;
    border-radius: 20px;
    padding: 20px;
  }

  .logo {
    border-radius: 20px;
  }
</style>